import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    // Prevent moves if there's a winner or the cell is already filled
    if (winner || board[index]) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  }

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    // check for tie
    if (!board.includes(null)) {
      setWinner("Tie");
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  }


  return (
    <div style={{ marginTop: "40px", textAlign: "center" }}>
      <h1>Tic Tac Toe</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 80px)", gap: "10px" }}>
        {
          board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              style={{
                width: "80px",
                height: '80px',
                cursor: "pointer",
                border: '2px solid #333',
                fontSize: "24px",
                fontWeight: "bold",
                color: cell === 'X' ? 'blue' : 'red',
                background: '#f0f0f0'
              }}
            >
              {cell}
            </button>
          ))
        }
      </div>

      {
        winner && (
          <div style={{ marginTop: "20px" }}>
            <h2>{winner === 'Tie' ? "It's a Tie!" : `Winner: ${winner}`}</h2>
            <button onClick={resetGame} style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}>
              Play Again
            </button>
          </div>
        )
      }
    </div>
  )
}

export default TicTacToe;
