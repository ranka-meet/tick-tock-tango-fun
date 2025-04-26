
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
};
