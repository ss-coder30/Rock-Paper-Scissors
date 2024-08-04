let userScore = 0;
let compScore = 0;

// Correct selector to target individual choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userScorecard = document.querySelector("#user-score");
const compScorecard = document.querySelector("#comp-score");
const resetBtn = document.querySelector("button");

const drawGame = () => {
  console.log("It's a draw!");
  msg.innerText = "It's a draw!!! Play again";
  msg.style.backgroundColor = "#003844";
};

function showWinner(userWin, userChoice, compChoice) {
  if (userWin) {
    msg.innerText = `You win!!! Your ${userChoice} beat ${compChoice}`;
    userScore++;
    userScorecard.innerText = userScore;
    msg.style.backgroundColor = "green";

  } else {
    msg.innerText = `You lost!!! ${compChoice} beat your ${userChoice}`;
    compScore++;
    compScorecard.innerText = compScore;
    msg.style.backgroundColor = "red";

  }
}

const generateCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const playGame = (userChoice) => {
  const compChoice = generateCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      userWin = compChoice !== "paper";
    } else if (userChoice === "paper") {
      userWin = compChoice !== "scissors";
    } else {
      userWin = compChoice !== "rock";
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// Add event listeners to each choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

resetBtn.addEventListener("click", () => {
  msg.innerText = "Play your move!";
  msg.style.backgroundColor = "#003844";
  userScore = 0;
  compScore = 0;
  userScorecard.innerText = userScore;
  compScorecard.innerText = compScore;
});
