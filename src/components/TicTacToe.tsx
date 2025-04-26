
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Users } from "lucide-react";
import type { GameState, GameMode, Player } from "@/types/game";
import { findBestMove } from "@/utils/computerMove";

const createPlayers = (mode: GameMode): Player[] => {
  return mode === "computer" 
    ? [
        { id: 1, symbol: "X", name: "You" },
        { id: 2, symbol: "O", name: "Computer", isComputer: true }
      ]
    : [
        { id: 1, symbol: "X", name: "Player 1" },
        { id: 2, symbol: "O", name: "Player 2" },
        { id: 3, symbol: "△", name: "Player 3" },
        { id: 4, symbol: "□", name: "Player 4" }
      ];
};

const TicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>({
    squares: Array(9).fill(null),
    currentPlayerIndex: 0,
    gameMode: "multiplayer",
    players: createPlayers("multiplayer"),
    winner: null,
    isDraw: false
  });

  const calculateWinner = (squares: (string | null)[]): string | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
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
    const squares = gameState.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;

    squares[i] = gameState.players[gameState.currentPlayerIndex].symbol;
    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);

    setGameState(prev => ({
      ...prev,
      squares,
      currentPlayerIndex: (prev.currentPlayerIndex + 1) % prev.players.length,
      winner,
      isDraw
    }));

    // Computer's turn
    if (!winner && !isDraw && gameState.gameMode === "computer") {
      setTimeout(() => {
        const computerMove = findBestMove(squares);
        squares[computerMove] = "O";
        const newWinner = calculateWinner(squares);
        const newIsDraw = !newWinner && squares.every(square => square !== null);
        
        setGameState(prev => ({
          ...prev,
          squares,
          currentPlayerIndex: 0,
          winner: newWinner,
          isDraw: newIsDraw
        }));
      }, 500);
    }
  };

  const toggleGameMode = () => {
    const newMode: GameMode = gameState.gameMode === "computer" ? "multiplayer" : "computer";
    setGameState({
      squares: Array(9).fill(null),
      currentPlayerIndex: 0,
      gameMode: newMode,
      players: createPlayers(newMode),
      winner: null,
      isDraw: false
    });
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      squares: Array(9).fill(null),
      currentPlayerIndex: 0,
      winner: null,
      isDraw: false
    }));
  };

  const status = gameState.winner 
    ? `Winner: ${gameState.winner}`
    : gameState.isDraw
    ? "Game Draw!"
    : `Next player: ${gameState.players[gameState.currentPlayerIndex].name} (${gameState.players[gameState.currentPlayerIndex].symbol})`;

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center gap-4">
        <Button
          onClick={toggleGameMode}
          variant="outline"
          className="flex items-center space-x-2"
        >
          <Users className="h-4 w-4" />
          <span>{gameState.gameMode === "computer" ? "Switch to Multiplayer" : "Switch to Computer Mode"}</span>
        </Button>
      </div>
      
      <div className="text-2xl font-semibold text-gray-700">{status}</div>
      
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-lg shadow-lg">
        {gameState.squares.map((square, i) => (
          <button
            key={i}
            className={`w-20 h-20 sm:w-24 sm:h-24 text-4xl font-bold rounded-lg focus:outline-none transition-all transform hover:scale-105
              ${!square ? 'hover:bg-gray-50 shadow-sm' : 'bg-gray-100'}
              ${square ? `
                shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]
                before:absolute
                before:inset-0
                before:z-[-1]
                before:transform
                before:translate-y-[2px]
                before:rounded-lg
                before:bg-gray-200
                relative
              ` : ''}
              ${square === 'X' ? 'text-indigo-600' : 
                square === 'O' ? 'text-purple-600' : 
                square === '△' ? 'text-green-600' : 
                square === '□' ? 'text-orange-600' : ''
              }`}
            onClick={() => handleClick(i)}
            disabled={gameState.winner !== null || Boolean(square)}
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
