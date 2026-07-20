import styles from './Log.module.css';

export default function Log({ gameTurns }) {
  return (
    <ol className={styles.log}>
      {gameTurns.map(({ square, player }, index) => {
        const { row, col } = square;
        return (
          <li
            key={`${row}${col}`}
            className={`${styles.li} ${index === 0 ? styles.highlighted : null}`}
          >
            {player} selected {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}
