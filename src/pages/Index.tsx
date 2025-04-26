
import TicTacToe from "@/components/TicTacToe";

const Index = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] relative">
      <main className="flex-grow py-8">
        <div className="max-w-4xl mx-auto px-4">
          <TicTacToe />
        </div>
      </main>
      <aside className="hidden lg:block w-64 p-4">
        {/* Ad space */}
        <div className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg p-4 h-96">
          <div className="text-center text-gray-400">Ad Space</div>
        </div>
      </aside>
    </div>
  );
};

export default Index;
