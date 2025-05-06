
import TicTacToe from "@/components/TicTacToe";

const Index = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] relative">
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4">
          <TicTacToe />
        </div>
      </main>
    </div>
  );
};

export default Index;
