document.addEventListener('DOMContentLoaded', () => {


let button = document.querySelector('#submit'),
    text = document.querySelector('#input'),
    updateText = document.querySelector('.button-font'),
    fontSize = document.querySelector('#input-number'),
    fontColor = document.querySelector('#input-color');
    
    let showNotes = document.createElement('div');
    let countOfNotes = 0;
    showNotes.classList.add('scroll');
    updateText.appendChild(showNotes);

    button.addEventListener('click', (event) =>{
        // console.log(fontColor.value);
        let p = document.createElement('div');
        // p.classList.add('scroll');
        
        countOfNotes++;
        
        p.style.fontSize = `${fontSize.value}px`;
        p.innerText += `${countOfNotes}) ${text.value} \n`;
        p.style.color = `${fontColor.value}`;

        console.log(p.value);
        console.log(p);
        
        showNotes.appendChild(p);
        text.value = "";
        fontSize.value = '14px';

    });


});