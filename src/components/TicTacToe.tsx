import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, Users } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import type { GameState, GameMode, Player } from "@/types/game";
import { findBestMove } from "@/utils/computerMove";

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
    playerCount: 2
  });

  useEffect(() => {
    const boardSize = getBoardSize(gameState.playerCount);
    const totalSquares = boardSize * boardSize;
    
    setGameState(prev => ({
      ...prev,
      boardSize,
      squares: Array(totalSquares).fill(null),
      winner: null,
      isDraw: false,
      currentPlayerIndex: 0
    }));
  }, [gameState.playerCount]);

  const calculateWinner = (squares: (string | null)[]): string | null => {
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
        return firstSymbol;
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

    if (!winner && !isDraw && gameState.gameMode === "computer") {
      setTimeout(() => {
        const updatedSquares = [...squares];
        const computerMove = findBestMove(updatedSquares);
        updatedSquares[computerMove] = "O";
        const newWinner = calculateWinner(updatedSquares);
        const newIsDraw = !newWinner && updatedSquares.every(square => square !== null);
        
        setGameState(prev => ({
          ...prev,
          squares: updatedSquares,
          currentPlayerIndex: 0,
          winner: newWinner,
          isDraw: newIsDraw
        }));
      }, 500);
    }
  };

  const toggleGameMode = () => {
    if (gameState.playerCount > 2 && gameState.gameMode === "multiplayer") {
      return;
    }
    
    const newMode: GameMode = gameState.gameMode === "computer" ? "multiplayer" : "computer";
    const playerCount = newMode === "computer" ? 2 : gameState.playerCount;
    const boardSize = getBoardSize(playerCount);
    
    setGameState({
      squares: Array(boardSize * boardSize).fill(null),
      currentPlayerIndex: 0,
      gameMode: newMode,
      players: createPlayers(newMode, playerCount),
      winner: null,
      isDraw: false,
      boardSize,
      playerCount
    });
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
      gameMode
    }));
  };

  const resetGame = () => {
    setGameState(prev => ({
      ...prev,
      squares: Array(prev.boardSize * prev.boardSize).fill(null),
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

  const tileSize = gameState.boardSize === 3 
    ? "w-20 h-20 sm:w-24 sm:h-24" 
    : "w-16 h-16 sm:w-20 sm:h-20";
  
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button
          onClick={toggleGameMode}
          variant="outline"
          className="flex items-center space-x-2"
          disabled={gameState.playerCount > 2}
        >
          <Users className="h-4 w-4" />
          <span>
            {gameState.playerCount > 2 
              ? "Computer mode unavailable (2 players only)" 
              : gameState.gameMode === "computer" 
                ? "Switch to Multiplayer" 
                : "Switch to Computer Mode"}
          </span>
        </Button>
        
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
        className={`grid gap-2 bg-white p-4 rounded-lg shadow-lg`}
        style={{ 
          gridTemplateColumns: `repeat(${gameState.boardSize}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${gameState.boardSize}, minmax(0, 1fr))`
        }}
      >
        {gameState.squares.map((square, i) => (
          <button
            key={i}
            className={`${tileSize} text-4xl font-bold rounded-lg focus:outline-none transition-all transform hover:scale-105
              ${!square ? 'hover:bg-gray-50' : 'bg-gray-100'}
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
