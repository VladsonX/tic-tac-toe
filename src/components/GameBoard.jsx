import { useState } from 'react';
import styles from './GameBoard.module.css';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, gameTurns, ...props }) {
  let gameBoard = initialGameBoard;

  gameTurns.map(({ square, player }) => {
    const { row, col } = square;
    gameBoard[row][col] = player;
  });

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
