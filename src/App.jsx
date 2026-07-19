import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import styles from './App.module.css';
import Log from './components/Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer(prevValue => (prevValue === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      let currPlayer = 'X';
      if (prevTurns.length > 0 && prevTurns[0].player === 'X') currPlayer = 'O';

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
