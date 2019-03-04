const hexValues = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const button = document.querySelector('.colorBtn');
const bodyBgc = document.querySelector('body');
const hex = document.querySelector('.hex');

function colorChanger(){
    let hexCode = '#';
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexValues.length);
        hexCode += hexValues[random];
    }
    bodyBgc.style.backgroundColor = hexCode;
    hex.innerHTML = hexCode;
}

button.addEventListener('click', colorChanger);