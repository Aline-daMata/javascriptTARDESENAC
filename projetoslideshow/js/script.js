'use strict';
 
const imagens = [
    { id: '1', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85' },
    { id: '2', url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=85' },
    { id: '3', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85' },
    { id: '4', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=85' },
    { id: '5', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85' },
    { id: '6', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85' }
];
 
const containerItems = document.querySelector('#contItems');
 
const carregarImagens = (listaImagens, container) => {
    listaImagens.forEach(imagem => {
        container.innerHTML += `
            <div class="item">
                <img src="${imagem.url}" alt="Paisagem ${imagem.id}">
            </div>
        `;
    });
};
 
carregarImagens(imagens, containerItems);
 
let items = document.querySelectorAll('.item');
 
const anterior = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
};
 
const proximo = () => {
    const ultimoItem = items[items.length - 1];
    containerItems.insertBefore(ultimoItem, items[0]);
    items = document.querySelectorAll('.item');
};
 
document.querySelector('#previous').addEventListener('click', proximo);
document.querySelector('#next').addEventListener('click', anterior);