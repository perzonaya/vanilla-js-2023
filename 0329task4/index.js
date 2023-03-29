const clockTitle = document.querySelector(".js-clock");

function ddayClock(){
    const today = new Date();
    const thisYear = today.getFullYear();
    const christmas = new Date(thisYear, 11, 25);
    
    const dday = christmas - today;
    
    const days      = Math.floor(dday/ (1000 * 60 * 60 * 24));
    const hours     = String(Math.floor((dday / (1000 * 60 * 60)) % 24)).padStart(2,"0");
    const minutes   = String(Math.floor((dday / (1000 * 60)) % 60)).padStart(2,"0");
    const seconds   = String(Math.floor((dday / 1000) % 60)).padStart(2,"0");


   
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
}

ddayClock();
setInterval(ddayClock, 1000);