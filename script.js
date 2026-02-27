// const { createElement } = require("react");
const body = document.querySelector("body");

let getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);

  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
      ? "paper"
      : "scissors";
};

let getHumanChoice = function () {
  let humanNumber = prompt("Choose rock, paper or scissors");
  return humanNumber;
};

// let playGame = function () {
//   let computerScore = 0;
//   let humanScore = 0;
//   let playRound = function (humanChoice, computerChoice) {
//     let hC = humanChoice.toLowerCase();
//     let cC = computerChoice.toLowerCase();

//     if (hC === cC) {
//       console.log("It's a tie");
//     } else if (
//       (hC === "rock" && cC === "scissors") ||
//       (hC === "paper" && cC === "rock") ||
//       (hC === "scissors" && cC === "paper")
//     ) {
//       humanScore++;
//       console.log(`You win ${hC} beats ${cC}`);
//     } else {
//       computerScore++;
//       console.log(`You lose ${cC} beats ${hC}`);
//     }
//   };

//   // for (let i = 0; i < 5; i++) {
//   //   let humanChoice = getHumanChoice();
//   //   let computerChoice = getComputerChoice();
//   //   playRound(humanChoice, computerChoice);
//   // }

//   if (humanScore > computerScore) {
//     console.log(`You won !`);
//   } else if (computerScore > humanScore) {
//     console.log(`Computer won!`);
//   } else {
//     console.log(`It's a tie!`);
//   }
// };

// playGame();

const divOne = document.createElement("div");
divOne.id = "div";
body.appendChild(divOne);
const divTwo = document.createElement("div");
body.appendChild(divTwo);
const divScore = document.createElement("div");
body.appendChild(divScore);

let computerScore = 0;
let humanScore = 0;

let playRound = function (humanChoice, computerChoice) {
  let hC = humanChoice.toLowerCase();
  let cC = computerChoice.toLowerCase();

  if (hC === cC) {
    divOne.textContent = "It's a TIE";
    divScore.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
  } else if (
    (hC === "rock" && cC === "scissors") ||
    (hC === "paper" && cC === "rock") ||
    (hC === "scissors" && cC === "paper")
  ) {
    humanScore++;
    divOne.textContent = `You WIN ${hC} beats ${cC}`;
    divScore.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
  } else {
    computerScore++;
    divOne.textContent = `You LOSE ${cC} beats ${hC}`;
    divScore.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;
  }
  if (humanScore == 5) {
    divTwo.textContent = "Human WON";
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  } else if (computerScore == 5) {
    divTwo.textContent = "Computer WON";
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;
  }
};

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";
body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", () =>
  playRound("paper", getComputerChoice()),
);
btnScissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice()),
);
