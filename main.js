



// function createMsg(msg) {
//     const li = document.createElement('li');
//           li.innerHTML = msg.name;
//           out.append(li);

//     const btnDel = document.createElement('button');
//           btnDel.textContent = 'delete!';
//           li.append(btnDel);

//     btnDel.addEventListener('click', () => {
//         li.remove();
//     })      
// }
// for(let item of arr) {
//     createMsg(item);
// }
// btn.addEventListener('click', () => {
//     let inp = input.value;

//     const user = {
//         name : inp
//     }

//     arr.push(inp);
//     localStorage.setItem('data', JSON.stringify(arr));
//     createMsg(user);

//     input.value = '';
// })


const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const reset = document.querySelector('#reset');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let arr = [];

localStorage.length < 1 ? arr = [] : arr = JSON.parse(localStorage.getItem('data'));

function createTask(msg) {
   
    const li = document.createElement('div');
    li.innerHTML = `# ${msg.name}`;
    li.style.marginTop = '20px';
    li.style.marginBottom = '20px';
    left.append(li);

const btnDel = document.createElement('button');
    btnDel.textContent = 'удалить';
    btnDel.style.display = 'block';
    btnDel.style.backgroundColor = 'orange';
    btnDel.style.marginTop = '20px';
    btnDel.style.marginBottom = '20px';
    btnDel.style.border = 0;
    right.append(btnDel); 

btnDel.addEventListener('click', () => {
  li.remove();
  btnDel.remove();
})     

reset.addEventListener('click', () => {
    localStorage.clear();
})

}
for(let el of arr) {
    createTask(el);
}
btn.addEventListener('click', () => {
    let input = inp.value;
   
    const user = {
        name : input
    }
        arr.push(user);      
        localStorage.setItem('data', JSON.stringify(arr)); 

    createTask(user);

    inp.value = '';
})
