import Image from "next/image";
import styles from "../styles/Category.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Category(props) {
  const {
    sectionNumber,
    img,
    imageOrder,
    textOrder,
    categoryName,
    heading,
    text,
  } = props;

  return (
    <section className={styles.category}>
      <span
        className={
          styles["category__number"] +
          " " +
          (sectionNumber % 2 !== 0
            ? styles["category__number--right"]
            : styles["category__number--left"])
        }
      >
        {sectionNumber < 10 ? "0" + sectionNumber : sectionNumber}
      </span>
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 1, order: imageOrder }}>
            <Image src={img} alt={categoryName} />
          </Col>
          <Col md={{ span: 4, offset: 1, order: textOrder }}>
            <div className={styles.category__text}>
              <span className={styles.category__tag}>{categoryName}</span>
              <h3>{heading}</h3>
              <p>{text}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
