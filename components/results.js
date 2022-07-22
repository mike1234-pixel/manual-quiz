import styles from "../styles/Results.module.scss";
import buttonStyles from "../styles/Button.module.scss";

export default function ResultsScreen({ resetFunction, accepted }) {
  const acceptedMessage = (
    <p>
      Great news! We have the perfect treatment for your hair loss.
      <br />
      <br />
      Proceed to <a href="https://www.manual.co/">www.manual.co</a>, and prepare
      to say hello to your new hair!
    </p>
  );

  const rejectedMessage = (
    <p>
      Unfortunately, we are unable to prescribe this medication for you. This is
      because finasteride can alter the PSA levels, which maybe used to monitor
      for cancer.
      <br />
      <br /> You should discuss this further with your GP or specialist if you
      would still like this medication.
    </p>
  );

  return (
    <div className={styles.accepted}>
      {accepted ? acceptedMessage : rejectedMessage}
      <div className={buttonStyles.prev__container}>
        <button
          className={`${buttonStyles.prev} ${buttonStyles["prev--return-to-quiz"]}`}
          onClick={resetFunction}
        >
          return to quiz
        </button>
      </div>
    </div>
  );
}
