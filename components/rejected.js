import styles from "../styles/AcceptReject.module.scss";
import buttonStyles from "../styles/Button.module.scss";

export default function RejectedScreen({ resetRejected }) {
  return (
    <div className={styles.rejected}>
      <p>
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which maybe used to
        monitor for cancer.
        <br />
        <br /> You should discuss this further with your GP or specialist if you
        would still like this medication.
      </p>
      <div className={buttonStyles.prev__container}>
        <button
          className={`${buttonStyles.prev} ${buttonStyles["prev--return-to-quiz"]}`}
          onClick={resetRejected}
        >
          return to quiz
        </button>
      </div>
    </div>
  );
}
