import { useState } from 'react';
import styles from './GameBoard.module.css';

export default function GameBoard({
  onSelectSquare,
  gameTurns,
  gameBoard,
  ...props
}) {
  return (
    <ol {...props} id={styles['game-board']}>
      {gameBoard.map((row, rowIndex) => (
        <li className={styles.li} key={rowIndex}>
          <ol className={styles.ol}>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className={styles.button}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol}
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
