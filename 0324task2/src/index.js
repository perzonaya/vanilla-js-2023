const bgColor = document.body;
function changeBgColor(){
    const width= window.innerWidth;
    if(width<700){
       bgColor.classList.remove("bg-violet", "bg-yellow");
       bgColor.classList.add("bg-skyblue");
    }
    else if(width<1000){
        bgColor.classList.remove("bg-skyblue", "bg-yellow");
        bgColor.classList.add("bg-violet");
    }
    else{
        bgColor.classList.remove("bg-skyblue", "bg-violet");
        bgColor.classList.add("bg-yellow");
    }

}

window.addEventListener("resize",changeBgColor );
changeBgColor();