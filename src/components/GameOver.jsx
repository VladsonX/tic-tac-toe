import styles from './GameOver.module.css';

export default function GameOver({ winner, onRestart }) {
  return (
    <div className={styles.gameOver}>
      <h2 className={styles.textLarge}>Game Over</h2>
      {winner && <p className={styles.text}>{winner} has won!</p>}
      {!winner && <p className={styles.text}>It's a draw!</p>}
      <p className={styles.text}>
        <button onClick={onRestart} className={styles.button}>
          Restart
        </button>
      </p>
    </div>
  );
}
