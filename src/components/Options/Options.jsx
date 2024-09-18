import styles from "./Options.module.css";

const Options = () => {
  return (
    <div className={styles.optionsContainer}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <button>Reset</button>
    </div>
  );
};

export default Options;
