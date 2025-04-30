
import { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/components/ui/sonner";
import type { GameState, GameMode, Player } from "@/types/game";
import { findBestMove } from "@/utils/computerMove";
import Confetti from "./Confetti";

const createPlayers = (mode: GameMode, playerCount: number): Player[] => {
  if (mode === "computer") {
    return [
      { id: 1, symbol: "X", name: "You" },
      { id: 2, symbol: "O", name: "Computer", isComputer: true }
    ];
  } else {
    const symbols = ["X", "O", "△", "□"];
    return Array.from({ length: playerCount }, (_, index) => ({
      id: index + 1,
      symbol: symbols[index],
      name: `Player ${index + 1}`
    }));
  }
};

const getBoardSize = (playerCount: number): number => {
  return playerCount <= 2 ? 3 : 4; // 3x3 for 2 players, 4x4 for 3-4 players
};

const TicTacToe = () => {
  const [gameState, setGameState] = useState<GameState>({
    squares: Array(9).fill(null),
    currentPlayerIndex: 0,
    gameMode: "multiplayer",
    players: createPlayers("multiplayer", 2),
    winner: null,
    isDraw: false,
    boardSize: 3,
    playerCount: 2,
    winningLine: []
  });

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const boardSize = getBoardSize(gameState.playerCount);
    const totalSquares = boardSize * boardSize;
    
    setGameState(prev => ({
      ...prev,
      boardSize,
      squares: Array(totalSquares).fill(null),
      winner: null,
      isDraw: false,
      currentPlayerIndex: 0,
      winningLine: []
    }));
  }, [gameState.playerCount]);

  // Add automatic reset timer effect when game ends
  useEffect(() => {
    let resetTimeout: number;
    
    if (gameState.winner || gameState.isDraw) {
      resetTimeout = window.setTimeout(() => {
        resetGame();
      }, 3000); // Reset after 3 seconds
    }
    
    return () => {
      clearTimeout(resetTimeout);
    };
  }, [gameState.winner, gameState.isDraw]);

  const calculateWinner = (squares: (string | null)[]): { winner: string | null, winningLine: number[] } => {
    const size = gameState.boardSize;
    const lines: number[][] = [];
    
    for (let i = 0; i < size; i++) {
      const row: number[] = [];
      for (let j = 0; j < size; j++) {
        row.push(i * size + j);
      }
      lines.push(row);
    }
    
    for (let i = 0; i < size; i++) {
      const column: number[] = [];
      for (let j = 0; j < size; j++) {
        column.push(j * size + i);
      }
      lines.push(column);
    }
    
    const diagonal1: number[] = [];
    const diagonal2: number[] = [];
    for (let i = 0; i < size; i++) {
      diagonal1.push(i * size + i);
      diagonal2.push(i * size + (size - 1 - i));
    }
    lines.push(diagonal1);
    lines.push(diagonal2);

    for (const line of lines) {
      const firstSymbol = squares[line[0]];
      if (!firstSymbol) continue;
      
      let isWinningLine = true;
      for (let i = 1; i < line.length; i++) {
        if (squares[line[i]] !== firstSymbol) {
          isWinningLine = false;
          break;
        }
      }
      
      if (isWinningLine) {
        return { winner: firstSymbol, winningLine: line };
      }
    }
    
    return { winner: null, winningLine: [] };
  };

  const handleClick = (i: number) => {
    const squares = gameState.squares.slice();
    if (gameState.winner || squares[i]) return;

    squares[i] = gameState.players[gameState.currentPlayerIndex].symbol;
    const { winner, winningLine } = calculateWinner(squares);
    const isDraw = !winner && squares.every(square => square !== null);

    setGameState(prev => ({
      ...prev,
      squares,
      currentPlayerIndex: (prev.currentPlayerIndex + 1) % prev.players.length,
      winner,
      isDraw,
      winningLine: winningLine
    }));

    if (winner) {
      setShowConfetti(true);
      toast(`🎉 ${winner} wins! 🎉`, {
        description: "Congratulations on your victory! Game will restart in 3 seconds.",
        duration: 3000,
      });

      setTimeout(() => {
        setShowConfetti(false);
      }, 6000);
    }

    if (!winner && !isDraw && gameState.gameMode === "computer") {
      setTimeout(() => {
        const updatedSquares = [...squares];
        const computerMove = findBestMove(updatedSquares);
        updatedSquares[computerMove] = "O";
        const result = calculateWinner(updatedSquares);
        const newWinner = result.winner;
        const newWinningLine = result.winningLine;
        const newIsDraw = !newWinner && updatedSquares.every(square => square !== null);
        
        setGameState(prev => ({
          ...prev,
          squares: updatedSquares,
          currentPlayerIndex: 0,
          winner: newWinner,
          isDraw: newIsDraw,
          winningLine: newWinningLine
        }));

        if (newWinner) {
          setShowConfetti(true);
          toast(`🎉 ${newWinner} wins! 🎉`, {
            description: "The computer celebrates its victory! Game will restart in 3 seconds.",
            duration: 3000,
          });

          setTimeout(() => {
            setShowConfetti(false);
          }, 6000);
        }
      }, 500);
    }

    if (isDraw) {
      toast("Game Draw!", {
        description: "It's a tie! Game will restart in 3 seconds.",
        duration: 3000,
      });
    }
  };

  const toggleGameMode = () => {
    if (gameState.playerCount > 2 && gameState.gameMode === "multiplayer") {
      return;
    }
    
    const newMode: GameMode = gameState.gameMode === "computer" ? "multiplayer" : "computer";
    const playerCount = newMode === "computer" ? 2 : gameState.playerCount;
    const boardSize = getBoardSize(playerCount);
    
    setGameState(prev => ({
      ...prev,
      playerCount,
      boardSize,
      squares: Array(boardSize * boardSize).fill(null),
      players: createPlayers(newMode, playerCount),
      winner: null,
      isDraw: false,
      currentPlayerIndex: 0,
      gameMode: newMode,
      winningLine: []
    }));
  };

  const changePlayerCount = (count: string) => {
    const playerCount = parseInt(count);
    const boardSize = getBoardSize(playerCount);
    
    const gameMode = playerCount > 2 ? "multiplayer" : gameState.gameMode;
    
    setGameState(prev => ({
      ...prev,
      playerCount,
      boardSize,
      squares: Array(boardSize * boardSize).fill(null),
      players: createPlayers(gameMode, playerCount),
      winner: null,
      isDraw: false,
      currentPlayerIndex: 0,
      gameMode,
      winningLine: []
    }));
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      squares: Array(prev.boardSize * prev.boardSize).fill(null),
      currentPlayerIndex: 0,
      winner: null,
      isDraw: false,
      winningLine: []
    }));
  };

  const status = gameState.winner 
    ? `Winner: ${gameState.winner}`
    : gameState.isDraw
    ? "Game Draw!"
    : `Next player: ${gameState.players[gameState.currentPlayerIndex].name} (${gameState.players[gameState.currentPlayerIndex].symbol})`;

  const tileSize = gameState.boardSize === 3 
    ? "w-20 h-20 sm:w-24 sm:h-24" 
    : "w-16 h-16 sm:w-20 sm:h-20";
  
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Confetti active={showConfetti} />
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <button
          onClick={toggleGameMode}
          disabled={gameState.playerCount > 2}
          className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-colors
            ${gameState.playerCount > 2 
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
              : 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700 border border-indigo-300'}`}
        >
          <Users className="h-4 w-4" />
          <span>
            {gameState.playerCount > 2 
              ? "Computer mode unavailable (2 players only)" 
              : gameState.gameMode === "computer" 
                ? "Switch to Multiplayer" 
                : "Switch to Computer Mode"}
          </span>
        </button>
        
        {gameState.gameMode === "multiplayer" && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Players:</span>
            <Select 
              value={gameState.playerCount.toString()} 
              onValueChange={changePlayerCount}
            >
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Players" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 Players</SelectItem>
                <SelectItem value="3">3 Players</SelectItem>
                <SelectItem value="4">4 Players</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
      
      <div className="text-2xl font-semibold text-gray-700">{status}</div>
      
      <div 
        className={`grid gap-2 bg-gray-100 p-4 rounded-lg shadow-lg`}
        style={{ 
          gridTemplateColumns: `repeat(${gameState.boardSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gameState.boardSize}, minmax(0, 1fr))`
        }}
      >
        {gameState.squares.map((square, i) => {
          const isWinningTile = gameState.winningLine.includes(i);
          
          return (
            <button
              key={i}
              className={`${tileSize} text-4xl font-bold rounded-lg focus:outline-none transition-all transform hover:scale-105
                ${!square ? 'bg-white hover:bg-gray-50 shadow-md' : 'bg-white shadow-inner'}
                ${square ? `
                  shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]
                  before:absolute
                  before:inset-0
                  before:z-[-1]
                  before:transform
                  before:translate-y-[2px]
                  before:rounded-lg
                  before:bg-gray-200
                ` : ''}
                ${square === 'X' ? 'text-indigo-700 bg-indigo-50' : 
                  square === 'O' ? 'text-purple-700 bg-purple-50' : 
                  square === '△' ? 'text-green-700 bg-green-50' : 
                  square === '□' ? 'text-orange-700 bg-orange-50' : ''
                }
                ${isWinningTile ? 'bg-green-300 animate-pulse border-2 border-green-500' : ''}
                relative overflow-hidden`}
              onClick={() => handleClick(i)}
              disabled={gameState.winner !== null || Boolean(square)}
            >
              {square}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
