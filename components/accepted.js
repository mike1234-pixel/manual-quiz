import styles from "../styles/AcceptReject.module.scss";
import buttonStyles from "../styles/Button.module.scss";

export default function AcceptedScreen({ resetAccepted }) {
  return (
    <div className={styles.accepted}>
      <p>
        Great news! We have the perfect treatment for your hair loss.
        <br />
        <br />
        Proceed to <a href="https://www.manual.co/">www.manual.co</a>, and
        prepare to say hello to your new hair!
      </p>
      <div className={buttonStyles.prev__container}>
        <button
          className={`${buttonStyles.prev} ${buttonStyles["prev--return-to-quiz"]}`}
          onClick={resetAccepted}
        >
          return to quiz
        </button>
      </div>
    </div>
  );
}
