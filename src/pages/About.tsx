
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <Card className="bg-white/80 backdrop-blur-sm mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800">About Our Tic Tac Toe Game</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-indigo">
          <p className="text-gray-600 leading-relaxed">
            Welcome to our free online Tic Tac Toe game! We've created this simple yet engaging platform for friends to enjoy the classic game of Tic Tac Toe together. Our goal is to provide a clean, fast, and enjoyable gaming experience without any unnecessary complications.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Game Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Simple, intuitive interface that works on any device</li>
            <li>Play against the computer with adjustable difficulty levels</li>
            <li>Beautiful, responsive design with smooth animations</li>
            <li>No registration required - just visit and play</li>
            <li>Completely free with no hidden costs</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Our Development Journey</h3>
          <p className="text-gray-600 leading-relaxed">
            This game was developed as a passion project to bring the simple joy of Tic Tac Toe to the web. We built it using React, TypeScript, and Tailwind CSS to ensure a modern, responsive experience that works across all devices.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            During development, we focused on creating an AI opponent that's challenging but not impossible to beat. The computer player uses a modified minimax algorithm that can be adjusted to different difficulty levels, allowing players of all skill levels to enjoy the game.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">What Sets Us Apart</h3>
          <p className="text-gray-600 leading-relaxed">
            While Tic Tac Toe is a simple game, we believe our implementation offers several advantages:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Thoughtful design that's beautiful yet functional</li>
            <li>Optimized performance for instant gameplay</li>
            <li>Accessible design that works for everyone</li>
            <li>Regular updates with new features based on user feedback</li>
          </ul>
          
          <p className="text-gray-600 leading-relaxed mt-6">
            Whether you're taking a quick break or looking to challenge a friend, our game is perfect for casual entertainment. We believe in keeping things simple and fun, just like the traditional paper-and-pencil game we all grew up playing.
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800">Meet The Team</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-indigo">
          <p className="text-gray-600 leading-relaxed">
            Our small team is passionate about creating simple, enjoyable web games that anyone can play. We're constantly working to improve our games based on player feedback and implementing new features that enhance the gaming experience.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Have suggestions or want to reach out? Visit our <a href="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact page</a> to connect with us!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
