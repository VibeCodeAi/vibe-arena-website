import React, { useState, useEffect, useRef, useCallback } from 'react';

// Game constants
const GRID_SIZE = 8;
const GAME_PHASES = {
  PLAYER1_THINKING: 'player1_thinking',
  PLAYER1_EXECUTING: 'player1_executing',
  PLAYER2_THINKING: 'player2_thinking',
  PLAYER2_EXECUTING: 'player2_executing',
  BATTLE_END: 'battle_end',
  RESETTING: 'resetting'
};

const INITIAL_POSITIONS = {
  player1: { x: 1, y: 6 },
  player2: { x: 6, y: 1 }
};

const WALLS = [
  { x: 3, y: 3 }, { x: 4, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 4 },
  { x: 2, y: 5 }, { x: 5, y: 2 }, { x: 1, y: 3 }, { x: 6, y: 4 }
];

const SPELL_EFFECTS = {
  FIREBALL: 'fireball',
  LIGHTNING: 'lightning', 
  HEAL: 'heal',
  SHIELD: 'shield',
  TELEPORT: 'teleport'
};

const AI_SCENARIOS = [
  {
    player: 'player1',
    thought: "Analyzing enemy position at (6,1)... They're behind partial cover. I'll move to position (2,5) for a better angle, then cast Fireball. Estimated damage: 25-30. High probability of success.",
    action: { type: 'move_and_cast', newPos: { x: 2, y: 5 }, spell: SPELL_EFFECTS.FIREBALL, damage: 28, manaCost: 35 }
  },
  {
    player: 'player2',
    thought: "Heavy damage sustained! Health critical. Enemy is exposed at (2,5). I need to heal first, then counter with Lightning Strike while moving to cover behind the wall cluster.",
    action: { type: 'heal_and_move', newPos: { x: 5, y: 2 }, spell: SPELL_EFFECTS.HEAL, healing: 20, manaCost: 25 }
  },
  {
    player: 'player1',
    thought: "Enemy healed and repositioned to (5,2). They're using walls for cover. I'll teleport to (4,6) for flanking position, then Lightning Strike to bypass their defenses.",
    action: { type: 'teleport_and_cast', newPos: { x: 4, y: 6 }, spell: SPELL_EFFECTS.LIGHTNING, damage: 32, manaCost: 45 }
  },
  {
    player: 'player2',
    thought: "Critical situation! Flanked and low on health. Desperate measure: Shield up and charge with close-range Lightning. All-or-nothing strategy. Calculate optimal path...",
    action: { type: 'shield_and_attack', newPos: { x: 3, y: 5 }, spell: SPELL_EFFECTS.LIGHTNING, damage: 35, manaCost: 40 }
  },
  {
    player: 'player1',
    thought: "Enemy is making a desperate charge. They have shield up but low health. Perfect opportunity for final Fireball. Positioning for maximum impact...",
    action: { type: 'final_strike', spell: SPELL_EFFECTS.FIREBALL, damage: 40, manaCost: 30 }
  }
];

function TypewriterText({ text, isVisible, speed = 50, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isVisible || !text) {
      setDisplayedText('');
      setCurrentIndex(0);
      // If no text to display, immediately call onComplete
      if (!text && onComplete) {
        onComplete();
      }
      return;
    }

    if (currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
    } else if (onComplete) {
      onComplete();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, text, currentIndex, speed, onComplete]);

  useEffect(() => {
    if (isVisible && text) {
      setDisplayedText('');
      setCurrentIndex(0);
    }
  }, [isVisible, text]);

  return <span>{displayedText}</span>;
}

function SpellEffect({ effect, position, onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  const getEffectStyles = () => {
    switch (effect) {
      case SPELL_EFFECTS.FIREBALL:
        return 'bg-cosmic-orange-light animate-ping rounded-full';
      case SPELL_EFFECTS.LIGHTNING:
        return 'bg-cosmic-blue-light animate-pulse';
      case SPELL_EFFECTS.HEAL:
        return 'bg-cosmic-green animate-pulse rounded-full';
      case SPELL_EFFECTS.SHIELD:
        return 'bg-cosmic-purple-light animate-bounce rounded-full border-2 border-cosmic-white';
      case SPELL_EFFECTS.TELEPORT:
        return 'bg-cosmic-purple-light animate-spin rounded-full';
      default:
        return 'bg-cosmic-white animate-pulse';
    }
  };

  return (
    <div
      className={`absolute inset-1 ${getEffectStyles()} opacity-80 pointer-events-none z-10`}
      style={{
        gridColumn: position.x + 1,
        gridRow: position.y + 1
      }}
    />
  );
}

function PlayerAvatar({ player, position, isActive, health, maxHealth }) {
  const healthPercentage = (health / maxHealth) * 100;
  
  return (
    <div className={`absolute inset-1 rounded-lg flex items-center justify-center transition-all duration-500 ${
      player === 'player1' 
        ? 'bg-cosmic-blue-light text-white shadow-[0_0_15px_rgba(43,93,255,0.8)]' 
        : 'bg-cosmic-orange-light text-white shadow-[0_0_15px_rgba(255,108,17,0.8)]'
    } ${isActive ? 'scale-110 animate-pulse' : ''}`}>
      
      {/* Player icon */}
      <div className="text-2xl font-bold">
        {player === 'player1' ? '🧙‍♂️' : '🧙‍♀️'}
      </div>
      
      {/* Health indicator */}
      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-cosmic-black/50 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${
            healthPercentage > 60 ? 'bg-cosmic-green' : 
            healthPercentage > 30 ? 'bg-cosmic-yellow' : 'bg-cosmic-red-light'
          }`}
          style={{ width: `${healthPercentage}%` }}
        />
      </div>
    </div>
  );
}

function BattleGrid({ gameState, activeEffects, onEffectComplete }) {
  const renderCell = (x, y) => {
    const isWall = WALLS.some(wall => wall.x === x && wall.y === y);
    const isPlayer1 = gameState.player1.position.x === x && gameState.player1.position.y === y;
    const isPlayer2 = gameState.player2.position.x === x && gameState.player2.position.y === y;
    const effect = activeEffects.find(eff => eff.position.x === x && eff.position.y === y);
    
    let cellClass = "aspect-square border border-cosmic-purple-light/30 relative transition-all duration-300";
    
    if (isWall) {
      cellClass += " bg-cosmic-gray/60 shadow-inner";
    } else {
      cellClass += " bg-cosmic-black/40 hover:bg-cosmic-purple-light/10";
    }

    return (
      <div key={`${x}-${y}`} className={cellClass}>
        {/* Grid coordinates */}
        <div className="absolute top-0 left-0 text-xs text-cosmic-gray/40 font-mono leading-none p-0.5">
          {x},{y}
        </div>
        
        {/* Wall decoration */}
        {isWall && (
          <div className="absolute inset-2 bg-cosmic-gray rounded border border-cosmic-white/20 flex items-center justify-center">
            <div className="text-cosmic-white/40 text-xs">▓</div>
          </div>
        )}
        
        {/* Players */}
        {isPlayer1 && (
          <PlayerAvatar 
            player="player1" 
            position={{ x, y }}
            isActive={gameState.currentPhase.includes('player1')}
            health={gameState.player1.health}
            maxHealth={gameState.player1.maxHealth}
          />
        )}
        {isPlayer2 && (
          <PlayerAvatar 
            player="player2" 
            position={{ x, y }}
            isActive={gameState.currentPhase.includes('player2')}
            health={gameState.player2.health}
            maxHealth={gameState.player2.maxHealth}
          />
        )}
        
        {/* Spell effects */}
        {effect && (
          <SpellEffect 
            effect={effect.type}
            position={{ x, y }}
            onComplete={() => onEffectComplete(effect.id)}
          />
        )}
      </div>
    );
  };

  return (
    <div className="bg-cosmic-black/80 rounded-lg border border-cosmic-purple-light/50 p-4">
      <div className="text-center font-cyber text-cosmic-purple-light mb-4 text-sm uppercase tracking-wider">
        Battle Arena - 8x8 Grid
      </div>
      
      <div className="grid grid-cols-8 gap-1 max-w-lg mx-auto aspect-square">
        {Array.from({ length: GRID_SIZE }, (_, y) =>
          Array.from({ length: GRID_SIZE }, (_, x) => renderCell(x, y))
        )}
      </div>
      
      <div className="text-center text-xs font-cyber text-cosmic-white/60 mt-4">
        <div className="flex justify-center gap-6">
          <span><span className="text-cosmic-blue-light">🧙‍♂️</span> AI Mage 1</span>
          <span><span className="text-cosmic-orange-light">🧙‍♀️</span> AI Mage 2</span>
          <span><span className="text-cosmic-gray">▓</span> Walls</span>
        </div>
      </div>
    </div>
  );
}

function PlayerStats({ player, gameState, isActive, currentThought, isThinking, onTypewriterComplete }) {
  const playerData = gameState[player];
  const playerName = player === 'player1' ? 'ARCANE-AI' : 'MYSTIC-GPT';
  
  return (
    <div className={`bg-cosmic-black/90 rounded-lg border-2 p-4 transition-all duration-500 ${
      isActive 
        ? 'border-cosmic-blue-light shadow-[0_0_20px_rgba(43,93,255,0.6)] scale-[1.02]' 
        : 'border-cosmic-purple-light/40'
    }`}>
      {/* Glowing corners */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors duration-300 ${
        isActive ? 'border-cosmic-blue-light' : 'border-cosmic-purple-light/50'
      }`}></div>
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors duration-300 ${
        isActive ? 'border-cosmic-blue-light' : 'border-cosmic-purple-light/50'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-colors duration-300 ${
        isActive ? 'border-cosmic-blue-light' : 'border-cosmic-purple-light/50'
      }`}></div>
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors duration-300 ${
        isActive ? 'border-cosmic-blue-light' : 'border-cosmic-purple-light/50'
      }`}></div>

      {/* Player header */}
      <div className="text-center mb-4">
        <div className="font-pixel text-cosmic-blue-light text-lg tracking-wider mb-1">
          {playerName}
        </div>
        <div className="text-xs font-cyber text-cosmic-purple-light uppercase tracking-wider">
          LLM Battle Mage
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3 mb-4">
        <div>
          <div className="flex justify-between text-xs font-cyber mb-1">
            <span>Health</span>
            <span className="text-cosmic-orange-light">{playerData.health}/{playerData.maxHealth}</span>
          </div>
          <div className="w-full bg-cosmic-gray/40 rounded h-2">
            <div 
              className="h-2 bg-gradient-to-r from-cosmic-red-light to-cosmic-orange-light rounded transition-all duration-500"
              style={{ width: `${(playerData.health / playerData.maxHealth) * 100}%` }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs font-cyber mb-1">
            <span>Mana</span>
            <span className="text-cosmic-blue-light">{playerData.mana}/{playerData.maxMana}</span>
          </div>
          <div className="w-full bg-cosmic-gray/40 rounded h-2">
            <div 
              className="h-2 bg-gradient-to-r from-cosmic-blue-light to-cosmic-purple-light rounded transition-all duration-500"
              style={{ width: `${(playerData.mana / playerData.maxMana) * 100}%` }}
            />
          </div>
        </div>

        <div>
          <div className="text-xs font-cyber mb-1">Position</div>
          <div className="text-cosmic-white/80 text-sm font-mono">
            ({playerData.position.x}, {playerData.position.y})
          </div>
        </div>
      </div>

      {/* AI Status */}
      <div className="text-center">
        {isThinking && (
          <div className="text-cosmic-purple-light font-cyber text-sm">
            <div className="flex items-center justify-center gap-2 mb-2 animate-pulse">
              <i className="ph-fill ph-brain text-lg"></i>
              <span>AI ANALYZING...</span>
            </div>
          </div>
        )}
        {!isThinking && isActive && (
          <div className="text-cosmic-orange-light font-cyber text-sm">
            <div className="flex items-center justify-center gap-2">
              <i className="ph-fill ph-lightning text-lg"></i>
              <span>EXECUTING</span>
            </div>
          </div>
        )}
        {!isActive && !isThinking && (
          <div className="text-cosmic-gray font-cyber text-sm">
            <div className="flex items-center justify-center gap-2">
              <i className="ph-fill ph-pause text-lg"></i>
              <span>STANDBY</span>
            </div>
          </div>
        )}
      </div>

            {/* AI Thought Process */}
      {isThinking && currentThought && (
        <div className="mt-4 p-3 bg-cosmic-purple-light/20 rounded border border-cosmic-purple-light/40">
          <div className="text-cosmic-blue-light font-bold text-xs uppercase tracking-wider mb-2">
            <i className="ph-fill ph-brain mr-1"></i>
            AI Decision Process
          </div>
          <div className="text-cosmic-white/90 text-sm font-cyber leading-relaxed">
            <TypewriterText 
              text={currentThought}
              isVisible={isThinking && !!currentThought}
              speed={30}
              onComplete={onTypewriterComplete}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function GameSimulation() {
  const [gameState, setGameState] = useState({
    player1: {
      health: 100,
      maxHealth: 100,
      mana: 100,
      maxMana: 100,
      position: { ...INITIAL_POSITIONS.player1 }
    },
    player2: {
      health: 100,
      maxHealth: 100,
      mana: 100,
      maxMana: 100,
      position: { ...INITIAL_POSITIONS.player2 }
    },
    currentPhase: GAME_PHASES.PLAYER1_THINKING,
    winner: null
  });

  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const [activeEffects, setActiveEffects] = useState([]);
  const [isTypewriterComplete, setIsTypewriterComplete] = useState(false);
  const intervalRef = useRef(null);
  const effectIdRef = useRef(0);

  const currentScenario = AI_SCENARIOS[scenarioIndex];
  const isThinking = gameState.currentPhase.includes('thinking');
  const isExecuting = gameState.currentPhase.includes('executing');

  const addEffect = useCallback((type, position) => {
    const id = effectIdRef.current++;
    setActiveEffects(prev => [...prev, { id, type, position }]);
  }, []);

  const removeEffect = useCallback((id) => {
    setActiveEffects(prev => prev.filter(effect => effect.id !== id));
  }, []);

  const resetGame = useCallback(() => {
    setGameState({
      player1: {
        health: 100,
        maxHealth: 100,
        mana: 100,
        maxMana: 100,
        position: { ...INITIAL_POSITIONS.player1 }
      },
      player2: {
        health: 100,
        maxHealth: 100,
        mana: 100,
        maxMana: 100,
        position: { ...INITIAL_POSITIONS.player2 }
      },
      currentPhase: GAME_PHASES.PLAYER1_THINKING,
      winner: null
    });
    setScenarioIndex(0);
    setActiveEffects([]);
    setIsTypewriterComplete(false);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPhaseProgress(prev => {
        const newProgress = prev + 1;
        
        // Thinking phases: 60 ticks (6 seconds) - wait for typewriter
        // Executing phases: 30 ticks (3 seconds)
        // Battle end: 40 ticks (4 seconds)
        const phaseLength = isThinking ? 60 : gameState.currentPhase === GAME_PHASES.BATTLE_END ? 40 : 30;
        
        // For thinking phases, check if we should wait for typewriter or if there's no thought
        const currentThought = getCurrentThought();
        const shouldWaitForTypewriter = isThinking && currentThought && !isTypewriterComplete;
        
        // Auto-complete if thinking phase goes too long (failsafe)
        if (isThinking && newProgress >= 80) {
          setIsTypewriterComplete(true);
        }
        
        if (newProgress >= phaseLength && !shouldWaitForTypewriter) {
          setGameState(prevState => {
            const scenario = AI_SCENARIOS[scenarioIndex];
            let newState = { ...prevState };

            if (prevState.currentPhase === GAME_PHASES.PLAYER1_THINKING) {
              newState.currentPhase = GAME_PHASES.PLAYER1_EXECUTING;
            }
            else if (prevState.currentPhase === GAME_PHASES.PLAYER1_EXECUTING) {
              // Apply player 1's action if it's their scenario
              if (scenario && scenario.player === 'player1') {
                const action = scenario.action;
                if (action.newPos) {
                  newState.player1.position = { ...action.newPos };
                }
                newState.player1.mana = Math.max(0, newState.player1.mana - action.manaCost);
                
                if (action.damage) {
                  newState.player2.health = Math.max(0, newState.player2.health - action.damage);
                  addEffect(action.spell, newState.player2.position);
                }
                if (action.healing) {
                  newState.player1.health = Math.min(newState.player1.maxHealth, newState.player1.health + action.healing);
                  addEffect(SPELL_EFFECTS.HEAL, newState.player1.position);
                }
              }
              newState.currentPhase = GAME_PHASES.PLAYER2_THINKING;
            }
            else if (prevState.currentPhase === GAME_PHASES.PLAYER2_THINKING) {
              newState.currentPhase = GAME_PHASES.PLAYER2_EXECUTING;
            }
            else if (prevState.currentPhase === GAME_PHASES.PLAYER2_EXECUTING) {
              // Apply player 2's action if it's their scenario
              if (scenario && scenario.player === 'player2') {
                const action = scenario.action;
                if (action.newPos) {
                  newState.player2.position = { ...action.newPos };
                }
                newState.player2.mana = Math.max(0, newState.player2.mana - action.manaCost);
                
                if (action.damage) {
                  newState.player1.health = Math.max(0, newState.player1.health - action.damage);
                  addEffect(action.spell, newState.player1.position);
                }
                if (action.healing) {
                  newState.player2.health = Math.min(newState.player2.maxHealth, newState.player2.health + action.healing);
                  addEffect(SPELL_EFFECTS.HEAL, newState.player2.position);
                }
              }
              
              // Check for winner or continue
              if (newState.player1.health <= 0 || newState.player2.health <= 0 || scenarioIndex >= AI_SCENARIOS.length - 1) {
                newState.winner = newState.player1.health <= 0 ? 'player2' : 'player1';
                newState.currentPhase = GAME_PHASES.BATTLE_END;
              } else {
                setScenarioIndex(prev => prev + 1);
                newState.currentPhase = GAME_PHASES.PLAYER1_THINKING;
              }
            }
            else if (prevState.currentPhase === GAME_PHASES.BATTLE_END) {
              resetGame();
              return prevState; // Don't update state, resetGame will handle it
            }

            return newState;
          });
          
          setIsTypewriterComplete(false);
          return 0;
        }
        return newProgress;
      });
    }, 100);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isTypewriterComplete, scenarioIndex, isThinking, gameState.currentPhase, addEffect, resetGame]);

  const getCurrentThought = () => {
    if (!currentScenario || !isThinking) return '';
    
    // Return thought based on current phase, regardless of scenario player
    if (gameState.currentPhase === GAME_PHASES.PLAYER1_THINKING) {
      return currentScenario.player === 'player1' ? currentScenario.thought : '';
    } else if (gameState.currentPhase === GAME_PHASES.PLAYER2_THINKING) {
      return currentScenario.player === 'player2' ? currentScenario.thought : '';
    }
    
    return '';
  };

  const getPhaseProgress = () => {
    const phaseLength = isThinking ? 60 : gameState.currentPhase === GAME_PHASES.BATTLE_END ? 40 : 30;
    return (phaseProgress / phaseLength) * 100;
  };

  return (
    <div className="bg-gradient-to-br from-cosmic-black/95 via-cosmic-purple-light/10 to-cosmic-blue-light/10 backdrop-blur-sm rounded-xl border border-cosmic-purple-light/50 p-6 relative overflow-hidden">
      {/* Cosmic background effects */}
      <div className="absolute inset-0 pixel-grid-animated opacity-10"></div>
      <div className="absolute top-4 right-4 w-24 h-24 bg-cosmic-blue-light/20 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-4 left-4 w-20 h-20 bg-cosmic-purple-light/20 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        {/* Header */}
                 <div className="text-center mb-6">
           <div className="text-cosmic-purple-light font-cyber text-sm uppercase tracking-wider mb-2">
             {gameState.currentPhase === GAME_PHASES.BATTLE_END 
               ? `${gameState.winner === 'player1' ? 'ARCANE-AI' : 'MYSTIC-GPT'} WINS!`
               : gameState.currentPhase.replace(/_/g, ' ').replace('player1', 'ARCANE-AI').replace('player2', 'MYSTIC-GPT')
             }
           </div>
           {gameState.currentPhase === GAME_PHASES.BATTLE_END && (
             <div className="text-cosmic-white/60 text-xs font-cyber">
               Resetting battle in a moment...
             </div>
           )}
           {gameState.currentPhase !== GAME_PHASES.BATTLE_END && (
             <div className="text-cosmic-white/60 text-xs font-cyber">
               Round {Math.floor(scenarioIndex / 2) + 1} • Scenario {scenarioIndex + 1}/{AI_SCENARIOS.length}
             </div>
           )}
         </div>

        {/* Main battle view */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
          {/* Player 1 Stats */}
                     <div className="relative">
             <PlayerStats
               player="player1"
               gameState={gameState}
               isActive={gameState.currentPhase.includes('player1')}
               currentThought={gameState.currentPhase === GAME_PHASES.PLAYER1_THINKING ? getCurrentThought() : ''}
               isThinking={gameState.currentPhase === GAME_PHASES.PLAYER1_THINKING}
               onTypewriterComplete={() => setIsTypewriterComplete(true)}
             />
           </div>

          {/* Battle Grid */}
          <div className="order-3 xl:order-2">
            <BattleGrid 
              gameState={gameState}
              activeEffects={activeEffects}
              onEffectComplete={removeEffect}
            />
            
            {/* Current action display */}
            {currentScenario && isExecuting && (
              <div className="mt-4 text-center">
                <div className="inline-block bg-cosmic-black/90 px-4 py-3 rounded-lg border border-cosmic-orange-light/50">
                  <div className="font-cyber text-cosmic-orange-light text-sm font-bold">
                    Executing: {currentScenario.action.type.replace(/_/g, ' ').toUpperCase()}
                  </div>
                  <div className="text-cosmic-white/60 text-xs mt-1">
                    Mana Cost: {currentScenario.action.manaCost}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Player 2 Stats */}
                     <div className="relative order-2 xl:order-3">
             <PlayerStats
               player="player2"
               gameState={gameState}
               isActive={gameState.currentPhase.includes('player2')}
               currentThought={gameState.currentPhase === GAME_PHASES.PLAYER2_THINKING ? getCurrentThought() : ''}
               isThinking={gameState.currentPhase === GAME_PHASES.PLAYER2_THINKING}
               onTypewriterComplete={() => setIsTypewriterComplete(true)}
             />
           </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="w-full bg-cosmic-gray/30 rounded-full h-2">
            <div 
              className="h-2 bg-gradient-to-r from-cosmic-blue-light via-cosmic-purple-light to-cosmic-orange-light rounded-full transition-all duration-100"
              style={{ width: `${getPhaseProgress()}%` }}
            />
          </div>
          <div className="text-center text-xs text-cosmic-white/50 mt-2 font-cyber">
            Phase Progress
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameSimulation; 