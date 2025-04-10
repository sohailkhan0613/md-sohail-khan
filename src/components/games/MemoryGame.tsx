
import { useState, useEffect } from 'react';

// Card symbols
const CARD_SYMBOLS = [
  '🚀', '🌟', '🎮', '🎯', '🏆', '💻', '🎨', '🎭',
];

type Card = {
  id: number;
  symbol: string;
  flipped: boolean;
  matched: boolean;
};

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<number>(0);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    setIsLoading(true);
    
    // Create pairs of cards
    const cardPairs = [...CARD_SYMBOLS, ...CARD_SYMBOLS].map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false,
      matched: false,
    }));
    
    // Shuffle cards
    const shuffledCards = shuffleArray(cardPairs);
    
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameOver(false);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  
  const handleCardClick = (id: number) => {
    // Ignore clicks if game is over or card is already flipped
    if (gameOver || flippedCards.length >= 2) return;
    
    // Find the clicked card
    const clickedCard = cards.find(card => card.id === id);
    
    // Ignore clicks on already matched or flipped cards
    if (!clickedCard || clickedCard.matched || clickedCard.flipped) return;
    
    // Flip the card
    const updatedCards = cards.map(card => 
      card.id === id ? { ...card, flipped: true } : card
    );
    
    setCards(updatedCards);
    
    // Add card to flipped cards
    const updatedFlippedCards = [...flippedCards, id];
    setFlippedCards(updatedFlippedCards);
    
    // If two cards are flipped, check for a match
    if (updatedFlippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
      
      const [firstId, secondId] = updatedFlippedCards;
      const firstCard = updatedCards.find(card => card.id === firstId);
      const secondCard = updatedCards.find(card => card.id === secondId);
      
      if (firstCard?.symbol === secondCard?.symbol) {
        // If symbols match, mark cards as matched
        const matchedCards = updatedCards.map(card => 
          card.id === firstId || card.id === secondId 
            ? { ...card, matched: true } 
            : card
        );
        
        setCards(matchedCards);
        setFlippedCards([]);
        setMatchedPairs(prevMatched => prevMatched + 1);
        
        // Check if all pairs are matched (game over)
        if (matchedPairs + 1 === CARD_SYMBOLS.length) {
          setGameOver(true);
        }
      } else {
        // If no match, flip cards back after a delay
        setTimeout(() => {
          const resetCards = updatedCards.map(card => 
            card.id === firstId || card.id === secondId 
              ? { ...card, flipped: false } 
              : card
          );
          
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };
  
  const renderCard = (card: Card) => {
    return (
      <div
        key={card.id}
        className={`relative w-16 h-20 cursor-pointer transition-all duration-300 transform ${
          card.flipped ? 'rotate-y-180' : ''
        } ${card.matched ? 'opacity-70' : ''}`}
        onClick={() => handleCardClick(card.id)}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-lg border-2 ${
            card.flipped || card.matched
              ? 'border-luxury-gold bg-luxury-navy/70'
              : 'border-luxury-gold/40 bg-gradient-purple'
          } transition-all duration-300 backface-hidden ${
            card.flipped ? 'rotate-y-180 opacity-0' : ''
          }`}
        >
          <span className="text-white text-lg">?</span>
        </div>
        
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-lg border-2 border-luxury-gold bg-luxury-navy/70 transition-all duration-300 backface-hidden ${
            card.flipped ? '' : 'rotate-y-180 opacity-0'
          }`}
        >
          <span className="text-2xl">{card.symbol}</span>
        </div>
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
            <div className="text-white">Pairs: {matchedPairs}/{CARD_SYMBOLS.length}</div>
          </div>
          
          <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-luxury-navy/30 backdrop-blur-sm border border-luxury-gold/20 rounded-lg">
            {cards.map(card => renderCard(card))}
          </div>
          
          {gameOver && (
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-luxury-gold mb-2">Congratulations!</h3>
              <p className="text-white">You completed the game in {moves} moves</p>
            </div>
          )}
          
          <button
            onClick={initializeGame}
            className="px-6 py-2 btn-primary"
          >
            {gameOver ? 'Play Again' : 'Restart Game'}
          </button>
        </>
      )}
    </div>
  );
};

// Helper function to shuffle array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default MemoryGame;
