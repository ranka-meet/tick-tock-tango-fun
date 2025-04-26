
import { useState, useEffect } from 'react';

type ConfettiPiece = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  speedY: number;
  speedX: number;
  opacity: number;
};

type ConfettiProps = {
  active: boolean;
};

const Confetti = ({ active }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);
  
  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }
    
    // Create confetti pieces
    const colors = ['#FF5252', '#FFEB3B', '#2196F3', '#4CAF50', '#9C27B0', '#FF9800'];
    const newPieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100, // percentage of screen width
        y: -20 - Math.random() * 10, // start above the viewport
        size: 5 + Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        speedY: 1 + Math.random() * 3,
        speedX: -1 + Math.random() * 2,
        opacity: 0.8 + Math.random() * 0.2
      });
    }
    
    setPieces(newPieces);
    
    // Animation loop
    let animationId: number;
    let lastTime = performance.now();
    
    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      setPieces(prevPieces => {
        // Only continue animation if pieces exist
        if (prevPieces.length === 0) return prevPieces;
        
        // Remove pieces that have fallen out of view
        const stillActive = prevPieces.filter(p => p.y < 120);
        
        // If all pieces have fallen out, stop animation
        if (stillActive.length === 0) return [];
        
        // Update positions
        return stillActive.map(piece => ({
          ...piece,
          y: piece.y + piece.speedY * (deltaTime / 16),
          x: piece.x + piece.speedX * (deltaTime / 16),
          rotation: piece.rotation + 0.2 * (deltaTime / 16),
          opacity: piece.opacity - 0.0008 * (deltaTime / 16)
        }));
      });
      
      // Continue animation if there are pieces
      if (pieces.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [active]);
  
  // Don't render anything if not active
  if (pieces.length === 0) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: piece.opacity,
            borderRadius: Math.random() > 0.5 ? '50%' : '0'
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
