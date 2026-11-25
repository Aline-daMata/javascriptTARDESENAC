$(function () {
    let alunos = [];
    let proximoId = 1;

    function renderizarTabela(lista = alunos) {
        const $tbody = $("#tabela-alunos");
        $tbody.empty();

        if (lista.length === 0) {
            $tbody.append(
                '<tr><td colspan="4">Nenhum registro encontrado.</td></tr>'
            );
            return;
        }

        lista.forEach((aluno) => {
            const linha = `
<tr data-id="${aluno.id}">
<td class="col-nome">${aluno.nome}</td>
<td class="col-curso">${aluno.curso}</td>
<td class="col-turma">${aluno.turma}</td>
<td>
<button type="button" class="acao-editar">Editar</button>
<button type="button" class="acao-excluir">Excluir</button>
</td>
</tr>
      `;
            $tbody.append(linha);
        });
    }

    function limparFormulario() {
        $("#aluno-id").val("");
        $("#nome").val("");
        $("#curso").val("");
        $("#turma").val("");
        $("#btn-salvar").text("Adicionar Aluno");
        $("#btn-cancelar").prop("hidden", true);
    }

    // Adicionar ou atualizar registro
    $("#form-aluno").on("submit", function (evento) {
        evento.preventDefault();

        const idExistente = $("#aluno-id").val();
        const dados = {
            nome: $("#nome").val().trim(),
            curso: $("#curso").val().trim(),
            turma: $("#turma").val().trim()
        };

        if (!dados.nome || !dados.curso || !dados.turma) return;

        if (idExistente) {
            const idNum = Number(idExistente);
            alunos = alunos.map((item) =>
                item.id === idNum ? { ...item, ...dados } : item
            );
        } else {
            alunos.push({
                id: proximoId++,
                ...dados
            });
        }

        limparFormulario();
        $("#filtro-busca").val("");
        renderizarTabela();
    });

    // Carregar registro no formulário para edição
    $("#tabela-alunos").on("click", ".acao-editar", function () {
        const idNum = Number($(this).closest("tr").data("id"));
        const aluno = alunos.find((item) => item.id === idNum);
        if (!aluno) return;

        $("#aluno-id").val(aluno.id);
        $("#nome").val(aluno.nome);
        $("#curso").val(aluno.curso);
        $("#turma").val(aluno.turma);
        $("#btn-salvar").text("Salvar Alterações");
        $("#btn-cancelar").prop("hidden", false);
        $("#nome").focus();
    });

    // Cancelar edição
    $("#btn-cancelar").on("click", limparFormulario);

    // Excluir registro
    $("#tabela-alunos").on("click", ".acao-excluir", function () {
        const idNum = Number($(this).closest("tr").data("id"));
        alunos = alunos.filter((item) => item.id !== idNum);
        renderizarTabela();
    });

    // Filtrar registros dinamicamente
    $("#filtro-busca").on("input", function () {
        const termo = $(this).val().toLowerCase().trim();
        const filtrados = alunos.filter(
            (aluno) =>
                aluno.nome.toLowerCase().includes(termo) ||
                aluno.curso.toLowerCase().includes(termo) ||
                aluno.turma.toLowerCase().includes(termo)
        );
        renderizarTabela(filtrados);
    });

    renderizarTabela();
});