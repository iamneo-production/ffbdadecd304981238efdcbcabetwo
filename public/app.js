const PLAYER_X_CLASS = 'x'
const PLAYER_O_CLASS = 'circle'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const boardElement = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.getElementById('winningMessageText')
let isPlayer_O_Turn = false


startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
	isPlayer_O_Turn = false
	cellElements.forEach(cell => {
		cell.classList.remove(PLAYER_X_CLASS)
		cell.classList.remove(PLAYER_O_CLASS)
		cell.removeEventListener('click', handleCellClick)
		cell.addEventListener('click', handleCellClick, { once: true })
	})
	setBoardHoverClass()
	winningMessageElement.classList.remove('show')
}


function handleCellClick(e) {
	const cell = e.target
	const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}



function handleCellClick(e) {
	const cell = e.target
	const currentClass = isPlayer_O_Turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
	placeMark(cell, currentClass)
	if (checkWin(currentClass)) {
		endGame(false)
	} else if (isDraw()) {
		endGame(true)
	} else {
		swapTurns()
		setBoardHoverClass()
	}
}


function setBoardHoverClass() {
	boardElement.classList.remove(PLAYER_X_CLASS)
	boardElement.classList.remove(PLAYER_O_CLASS)
	if (isPlayer_O_Turn) {
		boardElement.classList.add(PLAYER_O_CLASS)
	} else {
		boardElement.classList.add(PLAYER_X_CLASS)
	}
}

function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}


// // Function to handle player moves
// const ticTacToe = (element, index) => {
//     // Your game logic here

//     /*
//     **Part 1: Winning Conditions (Add your code here)**

//     1. Implement the logic to check for winning conditions using the 'conditions' array.
//     2. Display a winning message in the 'result' element when a player wins.
//     3. Disable all buttons after a win.
//     */

//     // Your code to update the game state and check for a win
//     // ...

//     // Your code to display the current player's turn
//     // ...

//     // Your code to handle button and cell interactions
//     // ...
// };

//     /*
//     **Part 2: Reset Function (Add your code here)**

//     1. Implement a new function that resets the game to its initial state.
//     2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
//     3. Update the 'result' element to indicate the current player's turn.
//     4. Re-enable all buttons for a new game.
//     */

// // Function to reset the game
// const resetGame = () => {
//     // Your code to reset the game state
//     // ...

//     // Your code to update the 'result' element
//     // ...

//     // Your code to re-enable buttons
//     // ...
// };

// btns.forEach((btn, i) => {
//     btn.addEventListener('click', () => ticTacToe(btn, i));
// });

// document.querySelector('#reset').addEventListener('click', resetGame);
