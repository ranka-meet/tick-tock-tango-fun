
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

type SquareValue = "X" | "O" | null;

const TicTacToe = () => {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;
    
    const newSquares = squares.slice();
    newSquares[i] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);
  const status = winner 
    ? `Winner: ${winner}` 
    : isDraw 
    ? "Game Draw!" 
    : `Next player: ${isXNext ? "X" : "O"}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="text-2xl font-semibold text-gray-700">{status}</div>
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg">
        {squares.map((square, i) => (
          <button
            key={i}
            className={`w-20 h-20 sm:w-24 sm:h-24 text-4xl font-bold rounded-lg focus:outline-none transition-colors
              ${square ? 'bg-gray-100' : 'hover:bg-gray-50'}
              ${square === 'X' ? 'text-indigo-600' : 'text-purple-600'}`}
            onClick={() => handleClick(i)}
          >
            {square}
          </button>
        ))}
      </div>
      <Button
        onClick={resetGame}
        className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700"
      >
        <RefreshCw className="h-4 w-4" />
        <span>Restart Game</span>
      </Button>
    </div>
  );
};

export default TicTacToe;
