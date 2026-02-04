let getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 3);

  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
      ? "paper"
      : "scissors";
};
console.log(getComputerChoice());

let getHumanChoice = function () {
  let humanNumber = prompt("Choose rock, paper or scissors");
  return humanNumber;
};



let playGame = function () {
  let computerScore = 0;
  let humanScore = 0;
  let playRound = function (humanChoice, computerChoice) {
    let hC = humanChoice.toLowerCase();
    let cC = computerChoice.toLowerCase();

    if (hC === cC) {
      console.log("It's a tie");
    } else if (
      (hC === "rock" && cC === "scissors") ||
      (hC === "paper" && cC === "rock") ||
      (hC === "scissors" && cC === "paper")
    ) {
      humanScore++;
      console.log(`You win ${hC} beats ${cC}`);
    } else {
      computerScore++;
      console.log(`You lose ${cC} beats ${hC}`);
    }
  };

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`You won !`);
  } else if (computerScore > humanScore) {
    console.log(`Computer won!`);
  } else {
    console.log(`It's a tie!`);
  }
};

playGame();
