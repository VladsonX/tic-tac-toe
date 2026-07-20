import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import styles from './App.module.css';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';

function deriveActivePlayer(gameTurns) {
  let activePlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const currPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id={styles['game-container']}>
        <ol className={styles.ol} id={styles.players}>
          <Player
            isActive={activePlayer === 'X'}
            symbol="X"
            name="Player 1"
          ></Player>
          <Player
            isActive={activePlayer === 'O'}
            symbol="O"
            name="Player 2"
          ></Player>
        </ol>
        <GameBoard
          gameTurns={gameTurns}
          onSelectSquare={handleSelectSquare}
          styles={styles.ol}
        />
        <Log gameTurns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
