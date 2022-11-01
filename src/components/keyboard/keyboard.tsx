import styles from "./Keyboard.module.css";

export const Keyboard = ({
  handleButtonClick,
}: {
  handleButtonClick: (selectedCode: string) => void;
}) => {
  return (
    <div>
      <div className={styles.column}>
        <button className={styles.key} onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className={styles.key} onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className={styles.key} onClick={() => handleButtonClick("3")}>
          3
        </button>
      </div>
      <div className={styles.column}>
        <button className={styles.key} onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className={styles.key} onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className={styles.key} onClick={() => handleButtonClick("6")}>
          6
        </button>
      </div>
      <div className={styles.column}>
        <button className={styles.key} onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className={styles.key} onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className={styles.key} onClick={() => handleButtonClick("9")}>
          9
        </button>
      </div>
      <div className={styles.column}>
        <button className={styles.key} onClick={() => handleButtonClick("0")}>
          0
        </button>
      </div>
    </div>
  );
};
