import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TicTacToe {
  // Define constants for players
  private static final char EMPTY = ' ';
  private static final char PLAYER_X = 'X';
  private static final char PLAYER_O = 'O';

  // Define the game board as a 3x3 array
  private static char[][] board = {
                                    { EMPTY, EMPTY, EMPTY },
{ EMPTY, EMPTY, EMPTY },
{ EMPTY, EMPTY, EMPTY }
                                                                };

                                                                    // Create a JFrame for the game window
                                                                        private static JFrame frame;

                                                                            // Create buttons for the game grid
                                                                                private static JButton[][] buttons = new JButton[3][3];

                                                                                    // Create a label for displaying game status
                                                                                        private static JLabel resultLabel;

                                                                                            // Variable to track the current player
                                                                                                private static char currentPlayer = PLAYER_X;

                                                                                                    public static void main(String[] args) {
  // Create and configure the game window
  frame = new JFrame("Tic Tac Toe");
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  frame.setSize(300, 300);
  frame.setLayout(new GridLayout(4, 3));

  // Initialize and add buttons to the game grid
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      buttons[i][j] = new JButton();
      buttons[i][j].setFont(new Font("Arial", Font.PLAIN, 48));
      buttons[i][j].setFocusPainted(false);
                                                                                                                                                                                                                                        final int row = i;
                                                                                                                                                                                                                                                        final int col = j;
      buttons[i][j].addActionListener(new ActionListener() {
        public void actionPerformed(ActionEvent e) {
        handleMove(row, col);
      }
                                                                                                                                                                                                                                                                                                                                                        });
    frame.add(buttons[i][j]);
  }
}

// Create and add a label for displaying game status
resultLabel = new JLabel("Player " + currentPlayer + "'s Turn");
resultLabel.setFont(new Font("Arial", Font.PLAIN, 20));
frame.add(resultLabel);

                                                                                                                                                                                                                                                                                                                                                                                                                                    // Create and add a reset button
                                                                                                                                                                                                                                                                                                                                                                                                                                            JButton resetButton = new JButton("Reset");
resetButton.setFont(new Font("Arial", Font.PLAIN, 16));
resetButton.addActionListener(new ActionListener() {
  public void actionPerformed(ActionEvent e) {
  resetGame();
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            });
frame.add(resetButton);

// Display the game window
frame.setVisible(true);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Function to handle player moves
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                public static void handleMove(int row, int col) {
  if (board[row][col] == EMPTY) {
    // Update the board with the current player's symbol
    board[row][col] = currentPlayer;

    // Update the button text to display the symbol
    buttons[row][col].setText(String.valueOf(currentPlayer));

    // Check for a win or draw
    if (checkWin(row, col)) {
      resultLabel.setText("Player " + currentPlayer + " Wins!");
      disableButtons();
    } else if (isBoardFull()) {
      resultLabel.setText("It's a Draw!");
      disableButtons();
    } else {
      // Switch to the next player
      currentPlayer = (currentPlayer == PLAYER_X) ? PLAYER_O : PLAYER_X;
      resultLabel.setText("Player " + currentPlayer + "'s Turn");
    }
  }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    // Function to check for a win
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        public static boolean checkWin(int row, int col) {
  // Check for a win in the row, column, and diagonals
  return (checkRow(row) || checkColumn(col) || checkDiagonals(row, col));
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                public static boolean checkRow(int row) {
  return (board[row][0] == board[row][1] && board[row][1] == board[row][2] && board[row][0] != EMPTY);
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                public static boolean checkColumn(int col) {
  return (board[0][col] == board[1][col] && board[1][col] == board[2][col] && board[0][col] != EMPTY);
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                public static boolean checkDiagonals(int row, int col) {
  if (row == col || row + col == 2) {
    return (checkMainDiagonal() || checkAntiDiagonal());
  }
  return false;
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            public static boolean checkMainDiagonal() {
  return (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != EMPTY);
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            public static boolean checkAntiDiagonal() {
  return (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != EMPTY);
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Function to check if the board is full (a draw)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                public static boolean isBoardFull() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      if (board[i][j] == EMPTY) {
        return false;
      }
    }
  }
  return true;
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            // Function to disable all buttons after a win or draw
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                public static void disableButtons() {
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      buttons[i][j].setEnabled(false);
    }
  }
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                // Function to reset the game
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    public static void resetGame() {
  // Clear the board
  for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
      board[i][j] = EMPTY;
      buttons[i][j].setText("");
      buttons[i][j].setEnabled(true);
    }
  }

  // Reset game variables
  currentPlayer = PLAYER_X;
  resultLabel.setText("Player " + currentPlayer + "'s Turn");
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }
