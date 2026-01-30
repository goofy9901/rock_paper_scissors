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

//   if (humanNumber === "rock") {
//     return "rock";
//   } else if (humanNumber === "paper") {
//     return "paper";
//   } else if (humanNumber === "scissors") {
//     return "scissors";
//   }
// };

console.log(getHumanChoice());
