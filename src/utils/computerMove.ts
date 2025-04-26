
type Square = string | null;

export const findBestMove = (squares: Square[]): number => {
  // Simple strategy: First try to win, then block opponent, then take center, then take corners, then any available
  const boardSize = Math.sqrt(squares.length);
  
  // Generate lines based on board size
  const lines: number[][] = [];
  
  // Rows
  for (let i = 0; i < boardSize; i++) {
    const row: number[] = [];
    for (let j = 0; j < boardSize; j++) {
      row.push(i * boardSize + j);
    }
    lines.push(row);
  }
  
  // Columns
  for (let i = 0; i < boardSize; i++) {
    const column: number[] = [];
    for (let j = 0; j < boardSize; j++) {
      column.push(j * boardSize + i);
    }
    lines.push(column);
  }
  
  // Diagonals
  const diagonal1: number[] = [];
  const diagonal2: number[] = [];
  for (let i = 0; i < boardSize; i++) {
    diagonal1.push(i * boardSize + i);
    diagonal2.push(i * boardSize + (boardSize - 1 - i));
  }
  lines.push(diagonal1);
  lines.push(diagonal2);

  // Try to win
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      const testSquares = [...squares];
      testSquares[i] = 'O';
      
      for (const line of lines) {
        const firstSymbol = testSquares[line[0]];
        if (!firstSymbol) continue;
        
        let isWinningLine = true;
        for (let j = 1; j < line.length; j++) {
          if (testSquares[line[j]] !== firstSymbol) {
            isWinningLine = false;
            break;
          }
        }
        
        if (isWinningLine) {
          return i;
        }
      }
    }
  }

  // Block opponent's winning move
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) {
      const testSquares = [...squares];
      testSquares[i] = 'X';
      
      for (const line of lines) {
        const firstSymbol = testSquares[line[0]];
        if (!firstSymbol) continue;
        
        let isWinningLine = true;
        for (let j = 1; j < line.length; j++) {
          if (testSquares[line[j]] !== firstSymbol) {
            isWinningLine = false;
            break;
          }
        }
        
        if (isWinningLine) {
          return i;
        }
      }
    }
  }

  // Take center if available
  const center = Math.floor(squares.length / 2);
  if (!squares[center]) return center;

  // Take corners
  const corners = [
    0,
    boardSize - 1,
    squares.length - boardSize,
    squares.length - 1
  ];
  const availableCorners = corners.filter(i => !squares[i]);
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Take any available square
  const availableSquares = squares.map((square, index) => !square ? index : null).filter(i => i !== null) as number[];
  return availableSquares[Math.floor(Math.random() * availableSquares.length)];
};
