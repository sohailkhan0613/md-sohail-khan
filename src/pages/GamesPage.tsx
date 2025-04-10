
import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import TicTacToe from "@/components/games/TicTacToe";
import SnakeGame from "@/components/games/SnakeGame";
import MemoryGame from "@/components/games/MemoryGame";
import PuzzleGame from "@/components/games/PuzzleGame";
import { Gamepad2 } from "lucide-react";

type GameType = 'tic-tac-toe' | 'snake' | 'memory' | 'puzzle';

const GamesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeGame, setActiveGame] = useState<GameType>('tic-tac-toe');

  const games = [
    {
      id: 'tic-tac-toe',
      title: 'Tic-Tac-Toe',
      description: 'The classic game of X\'s and O\'s. Challenge yourself against an AI opponent.',
      color: 'from-purple-600 to-blue-600',
    },
    {
      id: 'snake',
      title: 'Snake Game',
      description: 'Navigate the snake to collect food and grow without hitting the walls or yourself.',
      color: 'from-green-600 to-teal-600',
    },
    {
      id: 'memory',
      title: 'Memory Match',
      description: 'Test your memory skills by matching pairs of cards in this classic concentration game.',
      color: 'from-red-600 to-orange-600',
    },
    {
      id: 'puzzle',
      title: 'Puzzle Game',
      description: 'Rearrange the scrambled tiles to complete the image in this sliding puzzle challenge.',
      color: 'from-yellow-600 to-amber-600',
    },
  ];

  const renderGame = () => {
    switch (activeGame) {
      case 'tic-tac-toe':
        return <TicTacToe />;
      case 'snake':
        return <SnakeGame />;
      case 'memory':
        return <MemoryGame />;
      case 'puzzle':
        return <PuzzleGame />;
      default:
        return <TicTacToe />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-navy text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-luxury opacity-30"></div>
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-luxury-navy to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Interactive <span className="text-luxury-gold">Games</span>
            </h1>
            <p className="text-lg text-luxury-lightGray max-w-2xl mx-auto mb-12">
              Take a break and enjoy these fun games. They showcase front-end development
              skills while providing an entertaining experience.
            </p>
          </div>
        </section>
        
        {/* Games Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
              {/* Game Selection */}
              <div className="lg:col-span-1 flex flex-col gap-4">
                {games.map((game) => (
                  <button
                    key={game.id}
                    onClick={() => setActiveGame(game.id as GameType)}
                    className={`game-card text-left bg-gradient-to-br ${game.color} transition-colors ${
                      activeGame === game.id ? 'ring-4 ring-white/30' : ''
                    }`}
                  >
                    <div className="mb-3">
                      <Gamepad2 size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-white/80 text-sm">{game.description}</p>
                  </button>
                ))}
              </div>
              
              {/* Game Display */}
              <div className="lg:col-span-3 luxury-card flex flex-col justify-center items-center min-h-[500px]">
                <div className="w-full max-w-lg">
                  {renderGame()}
                </div>
              </div>
            </div>
            
            <div className="luxury-card">
              <h2 className="text-2xl font-serif font-bold text-luxury-gold mb-4">About These Games</h2>
              <p className="text-luxury-lightGray mb-4">
                These games are built using React and TypeScript, demonstrating various front-end development techniques including
                state management, event handling, and dynamic rendering. Each game implements different programming concepts
                that showcase problem-solving skills and attention to detail.
              </p>
              <p className="text-luxury-lightGray">
                Feel free to enjoy these games and explore their functionality. The code is structured to be maintainable and scalable,
                with clean separation of concerns and reusable components. These mini-applications exemplify my approach to
                building interactive web experiences.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GamesPage;
