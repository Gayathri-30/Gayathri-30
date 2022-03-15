function todo() {
    document.querySelector('#push').onclick = function () {
        if (document.querySelector('#newtask input').value.length == 0) {
            alert("Please Enter a Task");
        }
        else {
            const taskValue = document.querySelector('#newtask input').value
            document.querySelector('#tasks').innerHTML += `
        <div class="task" id ='${taskValue}'>
            <span id="${taskValue}">
                ${taskValue}
            </span>
            <input type="checkbox" id="${taskValue}" name="${taskValue}" value="${taskValue}" onchange='addtoCompleted(this)'>
        </div>`;
        document.getElementById('addtask').value = '';
        }
    }
    }
    function addtoCompleted(element){
        const spanElement = document.querySelector(`#${element.value}`);
        if(element.checked){
            spanElement.classList.add('completed');
        } else {
            spanElement.classList.remove('completed');
        }
    }
    function deleteCompleted(){
        const checkedElements = document.querySelectorAll('input');
        for(const element of checkedElements){
            if(element.checked){
                document.querySelector(`#${element.value}`).remove();
            }
        }
    }
    function empty(){
        const taskElements = document.querySelectorAll('div.task');
        for(const element of taskElements){
            element.remove();
        }
    }
    function save() {
        if (document.querySelector('#tasks').children.length !== 0){
            alert("Saved Successfully");
        } else {
            alert("Please Add Task");
        }
    }

function signup(){

    var name = document.getElementById('name');
    var email = document.getElementById("mail").value;
    var pw = document.getElementById('psw');
    var cn_pasword = document.getElementById("cn_psw").value;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem("email1", email.value)
        localStorage.setItem('pw', pw.value);
        localStorage.setItem("cn_psw",cn_pasword.value)
    
        alert('Your account has been created');
        window.location="signin.html";
    }
}

function login(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('name');
    var userPw = document.getElementById('pw');

    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.location="index.html";
    }else{
        alert('Error on login');
    }
}