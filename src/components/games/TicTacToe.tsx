
import { useState, useEffect } from 'react';

type Player = 'X' | 'O' | null;
type Board = (Player)[][];

const TicTacToe = () => {
  const [board, setBoard] = useState<Board>(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [status, setStatus] = useState<string>('');
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    checkGameStatus();
  }, [board]);

  const checkGameStatus = () => {
    const winner = calculateWinner(board);
    
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setGameOver(true);
    } else if (isBoardFull(board)) {
      setStatus('Game ended in a draw');
      setGameOver(true);
    } else {
      setStatus(`Next player: ${isXNext ? 'X' : 'O'}`);
    }
  };

  const handleClick = (row: number, col: number) => {
    if (board[row][col] || gameOver) return;
    
    const newBoard = [...board.map(row => [...row])];
    newBoard[row][col] = isXNext ? 'X' : 'O';
    
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(3).fill(null).map(() => Array(3).fill(null)));
    setIsXNext(true);
    setGameOver(false);
    setStatus('Next player: X');
  };

  const renderSquare = (row: number, col: number) => {
    return (
      <button
        className={`w-20 h-20 border border-luxury-gold/30 flex items-center justify-center text-2xl font-bold focus:outline-none ${
          board[row][col] === 'X' ? 'text-luxury-gold' : 'text-luxury-purple'
        } ${
          !board[row][col] && !gameOver ? 'hover:bg-luxury-navy/50' : ''
        } transition-colors`}
        onClick={() => handleClick(row, col)}
        disabled={!!board[row][col] || gameOver}
      >
        {board[row][col]}
      </button>
    );
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="mb-4 text-center text-lg text-white font-medium">{status}</div>
      
      <div className="mb-6 bg-luxury-navy/30 backdrop-blur-sm border border-luxury-gold/20 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-2">
          {board.map((row, rowIndex) => (
            row.map((_, colIndex) => (
              <div key={`${rowIndex}-${colIndex}`}>
                {renderSquare(rowIndex, colIndex)}
              </div>
            ))
          ))}
        </div>
      </div>

      <button 
        onClick={resetGame}
        className="w-full py-2 btn-primary"
      >
        Reset Game
      </button>
    </div>
  );
};

// Helper functions
const calculateWinner = (board: Board): Player => {
  const lines = [
    // Rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // Columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // Diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]],
  ];

  for (const line of lines) {
    const [[a, b], [c, d], [e, f]] = line;
    if (board[a][b] && board[a][b] === board[c][d] && board[a][b] === board[e][f]) {
      return board[a][b];
    }
  }

  return null;
};

const isBoardFull = (board: Board): boolean => {
  for (const row of board) {
    for (const cell of row) {
      if (cell === null) {
        return false;
      }
    }
  }
  return true;
};

export default TicTacToe;
