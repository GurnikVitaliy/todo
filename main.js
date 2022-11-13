const todoList = document.querySelector('#todo-list'),
      todoForm = document.querySelector('#todo-form'),
      todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', sendForm);

function sendForm(e) {
    e.preventDefault();

    let date = new Date();
    let myDate = date.toLocaleString();

    const inp = todoInput.value;
    const newTask = document.createElement('li');
    newTask.innerHTML = inp;

    const btnDel = document.createElement('button');
    btnDel.setAttribute('rol', 'button'),
    btnDel.innerHTML = 'delete';
    btnDel.classList.add('btn-del');

    const span = document.createElement('span');

    todoList.append(newTask);
    newTask.append(btnDel);
    newTask.append(myDate);
    

    todoInput.value = '';

    btnDel.addEventListener('click', function() {
        newTask.remove();
    })

    
}