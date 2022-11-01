import "./fireworks.module.scss";
import styles from "./fireworks.module.scss";

export const Fireworks = () => {
  return (
    <div className={styles.fireworksWrapper}>
      <div className={styles.pyro}>
        <div className={styles.before}></div>
        <div className={styles.after}></div>
      </div>
    </div>
  );
};
