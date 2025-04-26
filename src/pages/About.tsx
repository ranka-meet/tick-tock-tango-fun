
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">About Our Tic Tac Toe Game</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-indigo">
          <p className="text-gray-600 leading-relaxed">
            Welcome to our free online Tic Tac Toe game! We've created this simple yet engaging platform for friends to enjoy the classic game of Tic Tac Toe together. Our goal is to provide a clean, fast, and enjoyable gaming experience without any unnecessary complications.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you're taking a quick break or looking to challenge a friend, our game is perfect for casual entertainment. We believe in keeping things simple and fun, just like the traditional paper-and-pencil game we all grew up playing.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
