import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import styles from './App.module.css';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare() {
    setActivePlayer(prevValue => (prevValue === 'X' ? 'O' : 'X'));
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
          onChangePlayer={handleSelectSquare}
          activePlayer={activePlayer}
          className={styles.ol}
        />
      </div>
    </main>
  );
}

export default App;
