const input = document.getElementById('input');
const btnAdd = document.getElementById('btn-add');
const btnDel = document.getElementById('btn-del');
const btnSave = document.getElementById('btn-save');
const out = document.querySelector('.out');
const info = document.querySelector('.info');


btnAdd.addEventListener('click',addElem);

let d = new Date();
let date = d.toLocaleString();

function addElem() {
    let inp = input.value;
    const div = document.createElement('div');
           div.innerHTML = inp;
           out.append(div);
           div.classList.add('el');
           input.value = '';

           const li = document.createElement('li');
           li.innerHTML = 'задача добавленна ' + date;
           

    const delElem = document.createElement('button');
          delElem.innerHTML = 'удалить';
          delElem.classList.add('el-btn');
          div.append(delElem); 
          div.append(li);
         
        
     

    delElem.addEventListener('click', () => {
        div.remove();
    })      
}

btnDel.addEventListener('click', delElem);

function delElem() {
    out.remove();
}

btnSave.addEventListener('click', save);

function save() {
    btnSave.innerHTML = 'не жми кнопка не работает!'
}
