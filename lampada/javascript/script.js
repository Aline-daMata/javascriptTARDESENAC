const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('bulboff') > -1 && lamp.src.includes('quebrada'); // or checking custom flag/src
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    }
}

function lampBroken() {
    lamp.src = 'https://www.w3schools.com/js/pic_bulboff.gif'; // fallback or broken image simulation
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', () => {
    lamp.src = 'https://www.w3schools.com/js/pic_bulboff.gif'; // You can change to a broken state image if desired
    turnOn.disabled = true;
    turnOff.disabled = true;
});
