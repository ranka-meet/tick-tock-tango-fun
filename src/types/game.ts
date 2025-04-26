
export type Player = {
  id: number;
  symbol: string;
  name: string;
  isComputer?: boolean;
};

export type GameMode = "computer" | "multiplayer";

export type GameState = {
  squares: (string | null)[];
  currentPlayerIndex: number;
  gameMode: GameMode;
  players: Player[];
  winner: string | null;
  isDraw: boolean;
  boardSize: number; // Number of cells per side (3x3, 4x4, etc)
  playerCount: number; // Number of players (2-4)
};
