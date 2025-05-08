
import TicTacToe from "@/components/TicTacToe";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Book, Gamepad, Info } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] relative flex-col">
      <div className="bg-gradient-to-br from-indigo-100 via-purple-50 to-indigo-50 py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Tic Tac Toe</h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-8">
          Enjoy the classic game of Tic Tac Toe with our beautiful, responsive interface. Challenge the computer or play with a friend!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link to="/how-to-play">
            <Button className="gap-2">
              <Book size={18} />
              How to Play
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="gap-2">
              <Info size={18} />
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4">
          <TicTacToe />
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Gamepad className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Simple Gameplay</h3>
                <p className="text-gray-600">
                  Easy to learn, fun to master. Play the classic game with a modern interface.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-12 w-12 text-indigo-500 mx-auto mb-4"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
                  <line x1="2" y1="8" x2="22" y2="8" />
                  <line x1="2" y1="16" x2="22" y2="16" />
                  <line x1="8" y1="2" x2="8" y2="22" />
                  <line x1="16" y1="2" x2="16" y2="22" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Strategic Challenge</h3>
                <p className="text-gray-600">
                  Test your skills against our AI with multiple difficulty levels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <svg 
                  viewBox="0 0 24 24" 
                  className="h-12 w-12 text-indigo-500 mx-auto mb-4"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Play Anywhere</h3>
                <p className="text-gray-600">
                  Fully responsive design works on all your devices, from desktop to mobile.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Improve Your Skills?</h2>
            <p className="text-gray-600 mb-6">
              Check out our blog for strategies, tips, and the fascinating history of Tic Tac Toe.
            </p>
            <Link to="/blog">
              <Button>
                Visit the Blog
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
