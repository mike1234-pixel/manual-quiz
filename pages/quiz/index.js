import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import styles from "../../styles/Quiz.module.scss";

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
            <div>
              {questions.map((question, i) => {
                return (
                  <form
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
                      <p>{question.question}</p>
                      {question.options.map((option, i) => {
                        if (option.display.includes("<img")) {
                          return (
                            <div key={i}>
                              <input
                                type="radio"
                                id={option.value}
                                name={question.question}
                                value={option.value}
                                onClick={(e) =>
                                  handleChange(e, option.isRejection)
                                }
                              />
                              <label
                                htmlFor={option.value}
                                dangerouslySetInnerHTML={{
                                  __html: option.display,
                                }}
                              ></label>
                              <span>{option.value}</span>
                            </div>
                          );
                        } else {
                          return (
                            <div key={i}>
                              <input
                                type="radio"
                                id={option.value}
                                name={question.question}
                                value={option.value}
                                onClick={(e) =>
                                  handleChange(e, option.isRejection)
                                }
                              />
                              <label htmlFor={option.value}>
                                {option.display}
                              </label>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </form>
                );
              })}
            </div>
            {currentQuestion !== 0 && !accepted && !rejected && (
              <div>
                <button onClick={goBack}>previous question</button>
              </div>
            )}
            <div className={accepted ? styles.show : styles.hide}>
              <p>
                Great news! We have the perfect treatment for your hair loss.
                Proceed to <a href="https://www.manual.co/">www.manual.co</a>,
                and prepare to say hello to your new hair!
              </p>
              <button onClick={resetAccepted}>go back</button>
            </div>
            <div className={rejected ? styles.show : styles.hide}>
              <p>
                Unfortunately, we are unable to prescribe this medication for
                you. This is because finasteride can alter the PSA levels, which
                maybe used to monitor for cancer. You should discuss this
                further with your GP or specialist if you would still like this
                medication.
              </p>
              <button onClick={resetRejected}>go back</button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
