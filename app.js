const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const elementUl = document.querySelector('ul');

function addGoal(){
    const enterValue = inputEl.value;
    const newElementLi = document.createElement('li');
    newElementLi.textContent = enterValue;
    elementUl.appendChild(newElementLi);
    inputEl.value = "";
}


buttonEl.addEventListener('click',addGoal);