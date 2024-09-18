import styles from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  const { good, neutral, bad } = feedback;
  return (
    <div className={styles.feedbackContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: 0%</p>
    </div>
  );
};

export default Feedback;
