/*
console.log(window);

window.alert(1);

console.log(document.getElementById('my-form'));

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//multiple elements

console.log(document.querySelectorAll('.item'));

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Habro';
ul.children[1].innerText = 'Taini';
ul.lastElementChild.innerHTML = `<h1> Hello! It's me!<h1>`;

*/
/*
const btn = document.querySelector('.btn');
// btn.style.background = 'red';

btn.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log('Button clicked');
    //console.log(e.target.className);
    document.querySelector('#my-form').style.background = 'pink';
   // document.querySelector('body').classList.add('bg-dark');
});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Please enter a name and email');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        //console.log('Registration Successful');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
  
}
