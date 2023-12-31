// JavaScript code for the Tic Tac Toe game logic
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const resultContainer = document.querySelector(".result-container");
  const resultText = document.querySelector(".result");
  const resetBtn = document.getElementById("reset-btn");

  let currentPlayer = "X";
  let moves = 0;
  let gameOver = false;

  // Function to check if a player has won
  function checkWin() {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (buttons[a].value && buttons[a].value === buttons[b].value && buttons[a].value === buttons[c].value) {
        return buttons[a].value;
      }
    }

    if (moves === 9) {
      return "draw";
    }

    return null;
  }

  // Function to handle a player's move
  function handleMove(button) {
    if (!button.value && !gameOver) {
      button.value = currentPlayer;
      button.disabled = true;
      moves++;
      const winner = checkWin();
      if (winner) {
        gameOver = true;
        if (winner === "draw") {
          resultText.textContent = "It's a Draw!";
        } else {
          resultText.textContent = `Player ${winner} Wins!`;
        }
        resetBtn.disabled = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        resultText.textContent = `Player ${currentPlayer} Turn`;
      }
    }
  }

  // Event listener for button clicks
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleMove(button);
    });
  });

  // Event listener for the Reset button
  resetBtn.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.value = "";
      button.disabled = false;
    });
    resultText.textContent = "Player X Turn";
    currentPlayer = "X";
    moves = 0;
    gameOver = false;
    resetBtn.disabled = true;
  });
});
