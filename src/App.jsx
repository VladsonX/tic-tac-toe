import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';
import styles from './App.module.css';
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let activePlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') activePlayer = 'O';
  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState({ X: 'Player 1', O: 'Player 2' });

  const activePlayer = deriveActivePlayer(gameTurns);
  let winner;
  const gameBoard = [...initialGameBoard.map(row => [...row])];

  gameTurns.map(({ square, player }) => {
    const { row, col } = square;
    gameBoard[row][col] = player;
  });

  WINNING_COMBINATIONS.forEach(combination => {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    )
      winner = players[firstSquareSymbol];
  });

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRematch() {
    setGameTurns([]);
  }

  function handleChangePlayerName(symbol, newName) {
    setPlayers(prevPlayers => {
      const newPlayers = { ...prevPlayers };
      newPlayers[symbol] = newName;
      return newPlayers;
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
            onChangeName={handleChangePlayerName}
          ></Player>
          <Player
            isActive={activePlayer === 'O'}
            symbol="O"
            name="Player 2"
            onChangeName={handleChangePlayerName}
          ></Player>
        </ol>
        {(hasDraw || winner) && (
          <GameOver onRestart={handleRematch} winner={winner} />
        )}
        <GameBoard
          gameTurns={gameTurns}
          gameBoard={gameBoard}
          onSelectSquare={handleSelectSquare}
          styles={styles.ol}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
