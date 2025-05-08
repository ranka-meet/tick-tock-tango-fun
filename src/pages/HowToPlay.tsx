
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const HowToPlay = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="bg-white/80 backdrop-blur-sm mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">How to Play Tic Tac Toe</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-indigo">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Rules</h3>
          <p className="text-gray-600 leading-relaxed">
            Tic Tac Toe is a two-player game played on a 3x3 grid. Players take turns marking a square with their symbol (X or O). The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins the game.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">How to Play Our Online Version</h3>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600">
            <li>Visit the "Play" page on our website</li>
            <li>You'll start as Player X (the first player)</li>
            <li>Click on any empty square to place your X</li>
            <li>The computer (or second player) will place an O</li>
            <li>Continue taking turns until someone wins or the board is full</li>
            <li>Click "New Game" to play again</li>
          </ol>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Winning Strategies</h3>
          <p className="text-gray-600 leading-relaxed">
            While Tic Tac Toe is a simple game, there are several strategies that can help you win or force a draw:
          </p>
          
          <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">1. Control the Center</h4>
          <p className="text-gray-600 leading-relaxed">
            The center square is the most strategic position on the board as it's part of four possible winning combinations (horizontal, vertical, and both diagonals). If you're the first player, consider starting in the center.
          </p>
          
          <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">2. Take the Corners</h4>
          <p className="text-gray-600 leading-relaxed">
            After the center, the corners are the next most valuable positions. Each corner is part of three potential winning combinations. If your opponent takes the center, respond by claiming a corner.
          </p>
          
          <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">3. Block Your Opponent</h4>
          <p className="text-gray-600 leading-relaxed">
            Always scan the board to see if your opponent is one move away from creating a row of three. If they are, block that position to prevent them from winning.
          </p>
          
          <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">4. Create a Fork</h4>
          <p className="text-gray-600 leading-relaxed">
            A "fork" is a situation where you create two possible winning moves in a single turn. Since your opponent can only block one of them, you'll win on your next turn. Look for opportunities to position your marks so that you can create a fork.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Perfect Play</h3>
          <p className="text-gray-600 leading-relaxed">
            With perfect play from both sides, Tic Tac Toe always ends in a draw. This is because the game has been "solved," meaning that optimal strategy is known for every possible board position.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            However, our computer opponent has different difficulty levels, so you can still enjoy a challenge or practice your strategy against easier settings.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Having Fun</h3>
          <p className="text-gray-600 leading-relaxed">
            Remember, the most important part of any game is having fun! Whether you're playing to improve your strategic thinking or just passing the time, we hope you enjoy our Tic Tac Toe game.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToPlay;
