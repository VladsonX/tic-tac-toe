import styles from './Log.module.css';

export default function Log({ gameTurns }) {
  return (
    <ol className={styles.ol}>
      {gameTurns.map(({ square, player }) => {
        const { row, col } = square;
        return <li className={styles.li}>{`${player}: ${row}, ${col}`}</li>;
      })}
    </ol>
  );
}
