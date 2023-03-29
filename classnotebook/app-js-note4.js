// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
// 더 간단한 방법
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// function onLoginBtClick(){
    //     // console.dir(loginInput.value);
    //     // console.log("Click!!!!!!")
    //    const username = loginInput.value;
    //    if (username ===""){
        //     alert("Please write your name ");
        //    } else if (username.length>15) {
            //     alert("Your name is too long.");
            // }
            // }
            // loginButton.addEventListener("click", onLoginBtClick);
            //브라우저가 submit 될때마다 새로고침 하는걸 피하고 싶을때 1단계 
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const link= document.querySelector("a");
    const greeting=document.querySelector("#greeting");
   
          
    const HIDDEN_CLASSNAME="hidden";//변수명 오타줄여 실수하지 않기 위해 한번만 쓰도록 명명하고
    const USERNAME_KEY="username";// 스트링의 명명이면 대문자로 쓴다. 중요함수가들어있지 않아.

// function onLoginSubmit(){
    //     const username = loginInput.value;
    //     console.log(username);
    // }
    // loginForm.addEventListener("submt", onLoginSubmit);
    
    // 2단계 버튼을 클릭해도 새로고침이 안되고 입력값을 유지하고 있다
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);//입력된 username을 기억하고 있다.
    paintGreetings(username);
    // greeting.innerText = "Hello, " + username ;
    // greeting.innerText =`Hello, ${username}`;
    // //중요! 변수와 문자열을 합쳐서배열할때 백틱(`)을 사용해야 한다. 
    // greeting.classList.remove(HIDDEN_CLASSNAME);
}
function paintGreetings(username){
    greeting.innerText =`Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
   
}    
link.addEventListener("click",handleLinkClick);
loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}