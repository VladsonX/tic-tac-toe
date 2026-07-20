import { useState } from 'react';
import styles from './Player.module.css';

export default function Player({
  name,
  symbol,
  onChangeName,
  onClick,
  isActive,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function editNameHandler() {
    setIsEditing(prev => !prev);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function changeNameHandler(e) {
    setPlayerName(e.target.value);
  }

  return (
    <li className={`${styles.li} ${isActive ? styles.active : null}`}>
      <span className={styles.player}>
        {isEditing ? (
          <input
            onChange={changeNameHandler}
            value={playerName}
            type="text"
            required
            minLength="1"
            maxLength="12"
          />
        ) : (
          <span className={styles.playerName}>{playerName}</span>
        )}

        <span className={styles.playerSymbol}>{symbol}</span>
      </span>
      <button className={styles.button} onClick={editNameHandler}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
}
