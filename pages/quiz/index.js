import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import AcceptedScreen from "../../components/accepted";
import RejectedScreen from "../../components/rejected";
import styles from "../../styles/Quiz.module.scss";
import buttonStyles from "../../styles/Button.module.scss";

// runs at build time
export const getStaticProps = async () => {
  const res = await fetch(
    "https://manual-case-study.herokuapp.com/questionnaires/972423.json"
  );
  const data = await res.text();

  return {
    props: { data: data },
  };
};

export default function Quiz({ data }) {
  const deserializedData = JSON.parse(data);
  const questions = deserializedData.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputs, setInputs] = useState([]); // all selected answers are stored here
  const [rejected, setRejected] = useState(false);
  const [accepted, setAccepted] = useState(false);

  function acceptOrReject(isRejection) {
    if (isRejection) {
      setTimeout(() => {
        // rejected
        setRejected(true);
      }, 100);
    } else if (currentQuestion !== questions.length - 1) {
      // pass, next question
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // accepted
      setTimeout(() => {
        setAccepted(true);
      });
    }
  }

  const handleChange = (event, isRejection) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    acceptOrReject(isRejection);
  };

  function goBack() {
    setCurrentQuestion((currentQuestion) => currentQuestion - 1);
  }

  function resetAccepted() {
    setAccepted(false);
  }

  function resetRejected() {
    setRejected(false);
  }

  return (
    <main className={styles.quiz}>
      <Container>
        <Row>
          <Col>
            <form>
              {questions.map((question, i) => {
                return (
                  <div
                    className={
                      i === currentQuestion && !accepted && !rejected
                        ? styles.show
                        : styles.hide
                    }
                    key={i}
                  >
                    <div
                      className={
                        i === currentQuestion ? styles.show : styles.hide
                      }
                    >
                      <h1 className={styles.question}>{question.question}</h1>
                      <div
                        className={
                          question.options[0].display.includes("<img")
                            ? styles["image-inputs"]
                            : styles["yes-or-no-inputs"]
                        }
                      >
                        {question.options.map((option, i) => {
                          if (option.display.includes("<img")) {
                            return (
                              <div key={i}>
                                <input
                                  type="radio"
                                  id={option.value.toString()}
                                  name={question.question}
                                  value={option.value}
                                  className={styles["radio-button"]}
                                  onClick={(e) =>
                                    handleChange(e, option.isRejection)
                                  }
                                />
                                <label
                                  htmlFor={option.value.toString()}
                                  dangerouslySetInnerHTML={{
                                    __html: option.display,
                                  }}
                                ></label>
                                <p>{option.value}</p>
                              </div>
                            );
                          } else {
                            return (
                              <div key={i}>
                                <label
                                  htmlFor={
                                    question.question + option.value.toString()
                                  }
                                >
                                  <input
                                    type="radio"
                                    id={
                                      question.question +
                                      option.value.toString()
                                    }
                                    name={question.question}
                                    value={option.value}
                                    className={styles["radio-button"]}
                                    onClick={(e) =>
                                      handleChange(e, option.isRejection)
                                    }
                                  />

                                  <span>{option.display}</span>
                                </label>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </form>
            {currentQuestion !== 0 && !accepted && !rejected && (
              <div className={buttonStyles.prev__container}>
                <button onClick={goBack} className={buttonStyles.prev}>
                  previous question
                </button>
              </div>
            )}
            <div className={accepted ? styles.show : styles.hide}>
              <AcceptedScreen resetAccepted={resetAccepted} />
            </div>
            <div className={rejected ? styles.show : styles.hide}>
              <RejectedScreen resetRejected={resetRejected} />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
