
import { useState, useEffect } from 'react';

const GRID_SIZE = 4;
const TOTAL_TILES = GRID_SIZE * GRID_SIZE;
const EMPTY_TILE = TOTAL_TILES - 1;

type Tile = {
  value: number;
  position: number;
};

const PuzzleGame = () => {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSolved, setIsSolved] = useState<boolean>(false);
  
  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);
  
  const initializeGame = () => {
    setIsLoading(true);
    
    // Create ordered tiles
    const initialTiles = Array.from({ length: TOTAL_TILES }, (_, i) => ({
      value: i,
      position: i
    }));
    
    // Shuffle tiles (ensuring puzzle is solvable)
    const shuffledTiles = generateSolvablePuzzle(initialTiles);
    
    setTiles(shuffledTiles);
    setMoves(0);
    setIsSolved(false);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  
  const handleTileClick = (position: number) => {
    if (isSolved) return;
    
    // Find the clicked tile and empty tile
    const clickedTile = tiles.find(tile => tile.position === position);
    const emptyTile = tiles.find(tile => tile.value === EMPTY_TILE);
    
    if (!clickedTile || !emptyTile) return;
    
    // Check if the clicked tile is adjacent to the empty tile
    if (!isAdjacent(clickedTile.position, emptyTile.position)) return;
    
    // Swap the clicked tile with the empty tile
    const updatedTiles = tiles.map(tile => {
      if (tile.value === clickedTile.value) {
        return { ...tile, position: emptyTile.position };
      }
      if (tile.value === EMPTY_TILE) {
        return { ...tile, position: clickedTile.position };
      }
      return tile;
    });
    
    setTiles(updatedTiles);
    setMoves(prevMoves => prevMoves + 1);
    
    // Check if puzzle is solved
    const isSolved = updatedTiles.every(tile => tile.position === tile.value);
    if (isSolved) {
      setIsSolved(true);
    }
  };
  
  const renderTile = (tile: Tile) => {
    const isEmptyTile = tile.value === EMPTY_TILE;
    const row = Math.floor(tile.position / GRID_SIZE);
    const col = tile.position % GRID_SIZE;
    
    return (
      <div
        key={tile.value}
        className={`absolute flex items-center justify-center w-16 h-16 text-lg font-bold rounded-md cursor-pointer transition-all duration-300 ${
          isEmptyTile 
            ? 'bg-transparent'
            : (isSolved ? 'bg-luxury-gold text-luxury-navy' : 'bg-luxury-purple/80 text-white border border-luxury-gold/30 hover:bg-luxury-purple')
        }`}
        style={{
          transform: `translate(${col * 68}px, ${row * 68}px)`,
        }}
        onClick={() => handleTileClick(tile.position)}
      >
        {!isEmptyTile && tile.value + 1}
      </div>
    );
  };
  
  return (
    <div className="flex flex-col items-center">
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold"></div>
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between w-full max-w-xs">
            <div className="text-white">Moves: {moves}</div>
            {isSolved && (
              <div className="text-luxury-gold font-medium">Solved!</div>
            )}
          </div>
          
          <div 
            className="relative mb-6 p-4 bg-luxury-navy/30 backdrop-blur-sm border border-luxury-gold/20 rounded-lg"
            style={{
              width: `${GRID_SIZE * 68}px`,
              height: `${GRID_SIZE * 68}px`,
            }}
          >
            {tiles.map(renderTile)}
          </div>
          
          <button
            onClick={initializeGame}
            className="px-6 py-2 btn-primary"
          >
            {isSolved ? 'New Game' : 'Shuffle'}
          </button>
        </>
      )}
    </div>
  );
};

// Helper functions
const isAdjacent = (pos1: number, pos2: number): boolean => {
  const row1 = Math.floor(pos1 / GRID_SIZE);
  const col1 = pos1 % GRID_SIZE;
  const row2 = Math.floor(pos2 / GRID_SIZE);
  const col2 = pos2 % GRID_SIZE;
  
  // Check if tiles are adjacent horizontally or vertically
  return (
    (Math.abs(row1 - row2) === 1 && col1 === col2) ||
    (Math.abs(col1 - col2) === 1 && row1 === row2)
  );
};

const generateSolvablePuzzle = (tiles: Tile[]): Tile[] => {
  let shuffled = [...tiles];
  let iterations = 0;
  
  // Shuffle until we get a solvable puzzle (max 100 attempts)
  while (iterations < 100) {
    // Simple shuffle
    for (let i = shuffled.length - 2; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      
      // Swap positions (not values)
      const temp = shuffled[i].position;
      shuffled[i].position = shuffled[j].position;
      shuffled[j].position = temp;
    }
    
    // Check if the puzzle is solvable
    if (isSolvable(shuffled) && !isAlreadySolved(shuffled)) {
      break;
    }
    
    iterations++;
  }
  
  return shuffled;
};

const isAlreadySolved = (tiles: Tile[]): boolean => {
  return tiles.every(tile => tile.position === tile.value);
};

const isSolvable = (tiles: Tile[]): boolean => {
  // For a puzzle to be solvable, the number of inversions plus the row of the empty tile
  // must be even in a grid with an odd width, or the number of inversions plus the row of the
  // empty tile must have the same parity as the grid width in a grid with an even width.
  
  // Convert to array with values in their positions
  const tileValues = Array(TOTAL_TILES).fill(0);
  let emptyRow = 0;
  
  tiles.forEach(tile => {
    tileValues[tile.position] = tile.value;
    if (tile.value === EMPTY_TILE) {
      emptyRow = Math.floor(tile.position / GRID_SIZE);
    }
  });
  
  // Count inversions
  let inversions = 0;
  for (let i = 0; i < TOTAL_TILES - 1; i++) {
    for (let j = i + 1; j < TOTAL_TILES; j++) {
      // Don't count the empty tile
      if (tileValues[i] !== EMPTY_TILE && tileValues[j] !== EMPTY_TILE && tileValues[i] > tileValues[j]) {
        inversions++;
      }
    }
  }
  
  // For a 4x4 grid (even width)
  return (inversions + emptyRow) % 2 === 0;
};

export default PuzzleGame;
