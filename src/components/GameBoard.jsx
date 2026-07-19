import { useState } from 'react';
import styles from './GameBoard.module.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onChangePlayer, activePlayer, ...props }) {
  function selectSquareHandler(rowIndex, colIndex) {
    setGameBoard(prevGameBoard => {
      const newGameBoard = [
        ...prevGameBoard.map(innerArray => [...innerArray]),
      ];
      newGameBoard[rowIndex][colIndex] = activePlayer;
      return newGameBoard;
    });
    onChangePlayer();
  }

  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  return (
    <ol {...props} id={styles['game-board']}>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className={styles.ol}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={styles.button}
                  onClick={() => selectSquareHandler(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
