
type Square = string | null;

export const findBestMove = (squares: Square[]): number => {
  // Simple strategy: First try to win, then block opponent, then take center, then take corners, then any available
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  // Try to win
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      const testSquares = [...squares];
      testSquares[i] = 'O';
      if (lines.some(([a, b, c]) => 
        testSquares[a] && testSquares[a] === testSquares[b] && testSquares[a] === testSquares[c]
      )) {
        return i;
      }
    }
  }

  // Block opponent's winning move
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      const testSquares = [...squares];
      testSquares[i] = 'X';
      if (lines.some(([a, b, c]) => 
        testSquares[a] && testSquares[a] === testSquares[b] && testSquares[a] === testSquares[c]
      )) {
        return i;
      }
    }
  }

  // Take center if available
  if (!squares[4]) return 4;

  // Take corners
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(i => !squares[i]);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Take any available square
  const availableSquares = squares.map((square, index) => !square ? index : null).filter(i => i !== null) as number[];
  return availableSquares[Math.floor(Math.random() * availableSquares.length)];
};
