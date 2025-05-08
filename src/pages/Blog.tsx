
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "The History of Tic Tac Toe Through the Ages",
    date: "May 2, 2025",
    description: "Explore the fascinating history of Tic Tac Toe, from ancient Egypt to modern digital implementations.",
    content: `
      <p>Tic Tac Toe, also known as Noughts and Crosses in the UK or Xs and Os in Ireland, has been played for centuries across various cultures.</p>
      
      <p>The game's origins can be traced back to ancient Egypt, around 1300 BCE, where similar grid-based games were found etched into temple roofs. In ancient Rome, a version called "Terni Lapilli" was popular, though players had only three pieces each and had to move them once all were on the board.</p>
      
      <p>By the medieval period, the game was well-established throughout Europe and was often drawn in the dirt or scratched onto surfaces. The name "Tic Tac Toe" likely came into use in the 19th century.</p>
      
      <p>In the digital age, Tic Tac Toe was one of the first games programmed on computers. In 1952, A.S. Douglas created OXO (or Noughts and Crosses) as part of his PhD dissertation at the University of Cambridge, making it one of the earliest video games ever developed.</p>
      
      <p>Today, the game continues to be a popular introduction to programming concepts, game theory, and artificial intelligence due to its simple rules but interesting strategic possibilities.</p>
    `,
  },
  {
    id: "2",
    title: "Mastering Tic Tac Toe: Advanced Strategies",
    date: "April 28, 2025",
    description: "Learn advanced Tic Tac Toe strategies that can help you never lose a game again.",
    content: `
      <p>While Tic Tac Toe is often considered a simple game with limited strategic depth, mastering it requires understanding key positioning and tactical responses.</p>
      
      <p>The first move is crucial. As the first player (X), starting in the center gives you the most strategic options. If you start in a corner, you're still in a strong position. The middle edges (side squares) are generally the weakest opening moves.</p>
      
      <p>As the second player (O), your first move should respond directly to X's opening. If X took the center, place your O in a corner. If X took a corner, place your O in the center. These responses limit X's ability to create forks.</p>
      
      <p>Recognizing potential forks (situations where a player creates two winning threats simultaneously) is essential for high-level play. Always scan the board to identify if your opponent can create a fork on their next move, and block accordingly.</p>
      
      <p>With perfect play from both sides, Tic Tac Toe always results in a draw. This "solved" nature of the game makes it an excellent example in game theory and a perfect introduction to minimax algorithms in computer science.</p>
    `,
  },
  {
    id: "3",
    title: "Teaching Critical Thinking with Tic Tac Toe",
    date: "April 15, 2025",
    description: "How this simple game can help develop problem-solving and strategic thinking skills in children.",
    content: `
      <p>Tic Tac Toe offers much more than entertainment—it's a valuable educational tool for developing critical thinking skills in children and beginners to strategic games.</p>
      
      <p>The game teaches forward planning, as players must think several moves ahead to create winning opportunities while blocking their opponent. This helps develop sequential thinking and planning abilities.</p>
      
      <p>Pattern recognition is another key skill developed through Tic Tac Toe. Regular players become adept at quickly identifying threatening patterns and potential winning configurations.</p>
      
      <p>For young learners, Tic Tac Toe provides a gentle introduction to rule-following, turn-taking, and good sportsmanship. The game's simple structure makes it accessible even to preschool-aged children, while still offering opportunities for skill development.</p>
      
      <p>Teachers and parents can extend the learning value by discussing strategies explicitly, asking questions like "Why did you make that move?" or "What might happen if you play here instead?" These conversations help children articulate their thinking process and develop metacognitive skills.</p>
    `,
  },
];

const BlogListPage = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Tic Tac Toe Blog</h1>
        <p className="text-gray-600 mt-2">Insights, strategies, and fun facts about everyone's favorite grid game</p>
      </div>

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="bg-white/80 backdrop-blur-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800">
                <Link to={`/blog/${post.id}`} className="hover:text-indigo-600 transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.description}</p>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-indigo-600 hover:text-indigo-800 inline-flex items-center mt-4 font-medium"
              >
                Read more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
