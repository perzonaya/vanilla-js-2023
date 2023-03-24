const h1=document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {  
  // const currentColor= h1.style.color;
  // let newColor;
  // if (currentColor==="blue") {
    //     newColor= "tomato";}
    // else{
      //     newColor= "blue";
      // }
      // h1.style.color=newColor;
      
// js에서 CSS건드리는건 별로 좋은 방법이 아니다.
// js가 css를 바라보는게 아니라 html을 바라보게 코딩하라. css도 마찬가지고
function handleTitleClick() {  
  const clickedClass="clicked";
  // (초급1단계)css에서 변수를 한번 가져와서 const로 변수지정하면 오타의 에러를 줄일 수있다. 
  // if (h1.className === clickedClass)
  // {
  //   h1.className ="";
  // }
  // else 
  // {
  //   h1.className = clickedClass;
  // }
  //(초급2단계) 하지만. 원래 classname을 변경하는건  좋지 않다.  그래서 classlist를 사용한다. 주로쓴다

// if(h1.classList.contains(clickedClass)){
//   h1.classList.remove(clickedClass);
// }
// else{
//   h1.classList.add(clickedClass);
// }

//(최종) toggle function이 더 일을 편하게 해준다. 위의 코딩을 단 한번에 해주는 기능WoW
h1.classList.toggle("clicked");




}
h1.addEventListener("click", handleTitleClick);
