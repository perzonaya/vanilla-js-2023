const clock = document.querySelector("h2#clock");

// function sayHello(){
//     console.log("Hello");
// }

// setInterval(sayHello, 5000); //5초에 한번씩 hello를 호출한다. 특정함수를 시간마다 실행
// setTimeout(sayHello, 5000);// 5초 기다렸다가 한번만 실행

function getClock(){
    const date = new Date();
    // clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    // 숫자를 문자로 바꿔서string(),  padstart로 원하는 자리수로 표시되도록 고쳐준다 
      const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText=`${hours}:${minutes}:${seconds}`   
}

getClock(); //웹사이트가 시작되자마자 시계를 호출하고 
setInterval(getClock, 1000);//1초에 한번씩 실행