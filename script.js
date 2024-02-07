'use strict';
const form = document.querySelector('form');
form.addEventListener('submit', (event) =>{
    if(form.username.value < 3){
        alert('Username must be at least three characters long');
        event.preventDefault();
    }
    if(form.age.value<17|| form.age.value>110 || form.age.value===''){
        alert('Age must be between 16 and 111');
        event.preventDefault();
    }
    let emailregex = /^[a-zA-Z0-9._-]+@[aa-zA-Z0-9._-]+\.[a-zA-Z]{2,6}$/;
    if(!emailregex.test(form.email.value)){
        alert('Please enter a valid email address');
        event.preventDefault();
    }
    if(form.password.value<8){
        alert('Password must be at least 8 characters long');
        event.preventDefault();
    }
}); 