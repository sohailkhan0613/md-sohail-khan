
import React, { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';

interface PuzzleTile {
  value: number;
  position: number;
}

const PuzzleGame: React.FC = () => {
  const [tiles, setTiles] = useState<PuzzleTile[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [gameWon, setGameWon] = useState<boolean>(false);
  const [size, setSize] = useState<number>(3); // 3x3 puzzle by default
  
  // Initialize the puzzle
  useEffect(() => {
    initializePuzzle();
  }, [size]);
  
  const initializePuzzle = () => {
    const newTiles: PuzzleTile[] = [];
    const totalTiles = size * size;
    
    for (let i = 0; i < totalTiles; i++) {
      newTiles.push({
        value: i,
        position: i
      });
    }
    
    setTiles(newTiles);
    setMoves(0);
    setGameStarted(false);
    setGameWon(false);
  };
  
  const shuffle = () => {
    const shuffledTiles = [...tiles];
    for (let i = shuffledTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTiles[i].position, shuffledTiles[j].position] = 
      [shuffledTiles[j].position, shuffledTiles[i].position];
    }
    
    // Ensure the puzzle is solvable
    // For simplicity, we'll just check if the blank tile is at the end
    const blankTileIndex = shuffledTiles.findIndex(tile => tile.value === 0);
    if (blankTileIndex !== shuffledTiles.length - 1) {
      // Swap the blank tile with the last tile
      const lastTileIndex = shuffledTiles.findIndex(tile => tile.position === shuffledTiles.length - 1);
      [shuffledTiles[blankTileIndex].position, shuffledTiles[lastTileIndex].position] = 
      [shuffledTiles[lastTileIndex].position, shuffledTiles[blankTileIndex].position];
    }
    
    setTiles(shuffledTiles);
    setMoves(0);
    setGameStarted(true);
    setGameWon(false);
  };
  
  const isSolved = () => {
    return tiles.every(tile => tile.value === tile.position);
  };
  
  const canMove = (tileIndex: number) => {
    const emptyTilePos = tiles.find(t => t.value === 0)?.position || 0;
    const tilePos = tiles[tileIndex].position;
    
    // Check if tile is adjacent to empty tile (horizontally or vertically)
    if (tilePos === emptyTilePos - 1 && tilePos % size !== size - 1) return true; // Left
    if (tilePos === emptyTilePos + 1 && tilePos % size !== 0) return true; // Right
    if (tilePos === emptyTilePos - size) return true; // Up
    if (tilePos === emptyTilePos + size) return true; // Down
    
    return false;
  };
  
  const moveTile = (tileIndex: number) => {
    if (!gameStarted || gameWon) return;
    
    if (canMove(tileIndex)) {
      const newTiles = [...tiles];
      const emptyTileIndex = newTiles.findIndex(t => t.value === 0);
      
      // Swap positions
      [newTiles[tileIndex].position, newTiles[emptyTileIndex].position] = 
      [newTiles[emptyTileIndex].position, newTiles[tileIndex].position];
      
      setTiles(newTiles);
      setMoves(moves + 1);
      
      // Check if puzzle is solved
      if (isSolved()) {
        setGameWon(true);
        setGameStarted(false);
      }
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 rounded-lg bg-luxury-navy/60 border border-luxury-gold/30">
      <h2 className="text-2xl font-bold text-luxury-gold mb-4">Puzzle Game</h2>
      
      <div className="mb-4">
        <label className="mr-2 text-luxury-lightGray">Puzzle Size:</label>
        <select 
          className="bg-luxury-darkPurple text-white px-2 py-1 rounded border border-luxury-gold/30"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          disabled={gameStarted}
        >
          <option value={3}>3x3</option>
          <option value={4}>4x4</option>
          <option value={5}>5x5</option>
        </select>
      </div>
      
      <div className="mb-4">
        <button 
          className="bg-luxury-gold text-luxury-navy px-4 py-2 rounded-md flex items-center"
          onClick={shuffle}
        >
          <Shuffle className="mr-2" size={16} />
          Shuffle
        </button>
      </div>
      
      <div 
        className="relative grid gap-1 mb-4 bg-luxury-darkPurple p-1 rounded-md"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
          width: `${size * 60}px`,
          maxWidth: '90vw'
        }}
      >
        {tiles.map((tile, index) => (
          <div 
            key={tile.value}
            className={`
              flex items-center justify-center 
              w-14 h-14 rounded-md cursor-pointer 
              font-bold text-xl transition-all duration-300
              ${canMove(index) && !gameWon ? 'animate-pulse' : ''}
              ${tile.value === 0 ? 'invisible' : 'bg-luxury-gold text-luxury-navy hover:bg-luxury-gold/80'}
            `}
            onClick={() => moveTile(index)}
            style={{
              order: tile.position,
              transform: `scale(${canMove(index) && !gameWon ? 1.05 : 1})`,
            }}
          >
            {tile.value === 0 ? '' : tile.value}
          </div>
        ))}
      </div>
      
      <div className="text-luxury-lightGray">
        Moves: <span className="text-white font-bold">{moves}</span>
      </div>
      
      {gameWon && (
        <div className="mt-4 text-lg text-luxury-gold font-bold">
          Puzzle Solved! 🎉
        </div>
      )}
    </div>
  );
};

export default PuzzleGame;
