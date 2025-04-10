
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import { Gamepad2, ArrowRight } from "lucide-react";

const games = [
  {
    title: "Tic-Tac-Toe",
    description: "The classic game of X's and O's. Challenge yourself against an AI opponent.",
    color: "from-purple-600 to-blue-600",
    icon: <Gamepad2 size={36} className="text-white" />,
  },
  {
    title: "Snake Game",
    description: "Navigate the snake to collect food and grow without hitting the walls or yourself.",
    color: "from-green-600 to-teal-600",
    icon: <Gamepad2 size={36} className="text-white" />,
  },
  {
    title: "Memory Match",
    description: "Test your memory skills by matching pairs of cards in this classic concentration game.",
    color: "from-red-600 to-orange-600",
    icon: <Gamepad2 size={36} className="text-white" />,
  },
  {
    title: "Puzzle Game",
    description: "Rearrange the scrambled tiles to complete the image in this sliding puzzle challenge.",
    color: "from-yellow-600 to-amber-600",
    icon: <Gamepad2 size={36} className="text-white" />,
  },
];

const GamePreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-luxury-darkPurple/80 to-luxury-navy relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-purple/20 via-transparent to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title text-luxury-gold">Interactive Games</h2>
          <div className="w-20 h-1 bg-luxury-gold mx-auto mt-4 mb-6"></div>
          <p className="text-luxury-lightGray max-w-2xl mx-auto">
            Take a break and enjoy these interactive games. They showcase my front-end development
            skills while providing a fun user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {games.map((game, index) => (
            <div
              key={game.title}
              className={`game-card bg-gradient-to-br ${game.color} transition-all duration-700 delay-${
                index * 100
              } transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="mb-4">{game.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-white/80 text-sm mb-4">{game.description}</p>
              <Link
                to="/games"
                className="inline-flex items-center text-white hover:underline text-sm"
              >
                Play Now
                <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/games" className="btn-primary inline-flex items-center">
            Explore All Games
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamePreview;
