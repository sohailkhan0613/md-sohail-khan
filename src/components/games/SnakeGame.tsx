
import { useState, useEffect, useRef } from 'react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GRID_SIZE = 15;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 8, y: 8 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(INITIAL_SPEED);
  
  const directionRef = useRef<Direction>(direction);
  const gameOverRef = useRef<boolean>(gameOver);
  const isPausedRef = useRef<boolean>(isPaused);
  
  // Update refs when states change
  useEffect(() => {
    directionRef.current = direction;
    gameOverRef.current = gameOver;
    isPausedRef.current = isPaused;
  }, [direction, gameOver, isPaused]);
  
  // Handle keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (directionRef.current !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (directionRef.current !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (directionRef.current !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (directionRef.current !== 'LEFT') setDirection('RIGHT');
          break;
        case ' ':
          setIsPaused(!isPausedRef.current);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Game loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    const moveSnake = () => {
      if (gameOverRef.current || isPausedRef.current) return;

      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };

        // Move head based on direction
        switch (directionRef.current) {
          case 'UP':
            head.y -= 1;
            break;
          case 'DOWN':
            head.y += 1;
            break;
          case 'LEFT':
            head.x -= 1;
            break;
          case 'RIGHT':
            head.x += 1;
            break;
        }

        // Check for game over conditions
        if (
          head.x < 0 || head.x >= GRID_SIZE || 
          head.y < 0 || head.y >= GRID_SIZE ||
          isSnakeCollision(head, newSnake)
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Check if snake eats food
        if (head.x === food.x && head.y === food.y) {
          // Add new food
          setFood(getRandomFoodPosition(newSnake));
          // Increase score
          setScore(prev => prev + 1);
          // Increase speed every 5 points
          if ((score + 1) % 5 === 0 && speed > 50) {
            setSpeed(prev => prev - 10);
          }
          // Add head to snake (don't remove tail)
          newSnake.unshift(head);
        } else {
          // Add head and remove tail
          newSnake.unshift(head);
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [gameOver, isPaused, food, score, speed]);

  const resetGame = () => {
    setSnake([{ x: 8, y: 8 }]);
    setFood(getRandomFoodPosition([{ x: 8, y: 8 }]));
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    setSpeed(INITIAL_SPEED);
  };

  const handleDirectionClick = (newDirection: Direction) => {
    // Prevent 180-degree turns
    if (
      (direction === 'UP' && newDirection === 'DOWN') ||
      (direction === 'DOWN' && newDirection === 'UP') ||
      (direction === 'LEFT' && newDirection === 'RIGHT') ||
      (direction === 'RIGHT' && newDirection === 'LEFT')
    ) {
      return;
    }
    
    setDirection(newDirection);
  };

  // JSX for rendering the game
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex items-center justify-between w-full max-w-xs">
        <div className="text-white">Score: {score}</div>
        <button 
          onClick={() => setIsPaused(!isPaused)} 
          className="px-3 py-1 btn-outline text-sm"
          disabled={gameOver}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div 
        className="mb-6 relative bg-luxury-navy/30 backdrop-blur-sm border border-luxury-gold/20 rounded-lg"
        style={{
          width: GRID_SIZE * CELL_SIZE + 'px',
          height: GRID_SIZE * CELL_SIZE + 'px',
        }}
      >
        {/* Render food */}
        <div 
          className="absolute bg-luxury-gold rounded-full"
          style={{
            width: CELL_SIZE - 2 + 'px',
            height: CELL_SIZE - 2 + 'px',
            left: food.x * CELL_SIZE + 1 + 'px',
            top: food.y * CELL_SIZE + 1 + 'px',
          }}
        />

        {/* Render snake */}
        {snake.map((segment, index) => (
          <div 
            key={index}
            className={`absolute rounded-sm ${index === 0 ? 'bg-luxury-purple' : 'bg-luxury-purple/80'}`}
            style={{
              width: CELL_SIZE - 2 + 'px',
              height: CELL_SIZE - 2 + 'px',
              left: segment.x * CELL_SIZE + 1 + 'px',
              top: segment.y * CELL_SIZE + 1 + 'px',
            }}
          />
        ))}

        {/* Game over overlay */}
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-luxury-navy/80 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-xl font-bold text-luxury-gold mb-2">Game Over</h3>
              <p className="text-white mb-4">Your Score: {score}</p>
              <button 
                onClick={resetGame}
                className="px-4 py-2 btn-primary"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Touch controls for mobile users */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
        <div className="col-start-2">
          <button 
            onClick={() => handleDirectionClick('UP')}
            className="w-full py-3 bg-luxury-navy/50 border border-luxury-gold/30 rounded text-white"
            disabled={gameOver || isPaused}
          >
            ↑
          </button>
        </div>
        <div className="col-start-1 row-start-2">
          <button 
            onClick={() => handleDirectionClick('LEFT')}
            className="w-full py-3 bg-luxury-navy/50 border border-luxury-gold/30 rounded text-white"
            disabled={gameOver || isPaused}
          >
            ←
          </button>
        </div>
        <div className="col-start-2 row-start-2">
          <button 
            onClick={() => gameOver ? resetGame() : setIsPaused(!isPaused)}
            className="w-full py-3 btn-primary text-sm"
          >
            {gameOver ? 'Restart' : (isPaused ? 'Resume' : 'Pause')}
          </button>
        </div>
        <div className="col-start-3 row-start-2">
          <button 
            onClick={() => handleDirectionClick('RIGHT')}
            className="w-full py-3 bg-luxury-navy/50 border border-luxury-gold/30 rounded text-white"
            disabled={gameOver || isPaused}
          >
            →
          </button>
        </div>
        <div className="col-start-2 row-start-3">
          <button 
            onClick={() => handleDirectionClick('DOWN')}
            className="w-full py-3 bg-luxury-navy/50 border border-luxury-gold/30 rounded text-white"
            disabled={gameOver || isPaused}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const isSnakeCollision = (head: Position, snake: Position[]): boolean => {
  // Check if head collides with any segment of the snake (excluding the head)
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
};

const getRandomFoodPosition = (snake: Position[]): Position => {
  let position: Position;
  
  do {
    position = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  } while (isPositionInSnake(position, snake));
  
  return position;
};

const isPositionInSnake = (position: Position, snake: Position[]): boolean => {
  return snake.some(segment => segment.x === position.x && segment.y === position.y);
};

export default SnakeGame;
