const playform = document.querySelector("#random-game");
const userInput = document.querySelector("#user-input");
const userGuess = document.querySelector("#user-guess");
const guessButton = document.querySelector("#guess-button");


function mouseEffect(event) {
    event.addEventListener("mouseover", function() {
      event.style.borderColor = "skyblue";
    });
    
    event.addEventListener("mouseout", function() {
      event.style.borderColor = "";
    });
  }
  mouseEffect(userInput);
  mouseEffect(userGuess);


const result = document.querySelector("#result");

let maxNumber;

function userInputSubmit(event) {
    
  event.preventDefault();
  maxNumber =  parseInt(userInput.value);
}

function guessButtonSubmit(event) {
 event.preventDefault();
  const guessNumber =  parseInt(userGuess.value);

  if ((guessNumber <= maxNumber) && (guessNumber >= 0)){
    const machineNumber = Math.ceil(Math.random() * maxNumber) ;
    const compair = document.querySelector("#compair");
    compair.innerHTML = `You chose: ${guessNumber}, the machine chose: ${machineNumber}.`;

    if (guessNumber == machineNumber) {
      result.innerHTML = "You won!";
    } else {
      result.innerHTML = "You lost!";
    }
  } else {
    alert(`Guess between 0 to ${maxNumber}. Please try again.`);
  }
}
playform.addEventListener("submit", userInputSubmit);
playform.addEventListener("submit", guessButtonSubmit);