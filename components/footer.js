import Link from "next/link";
import styles from "../styles/Footer.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={{ span: 2, offset: 3 }}>
            <h6>Product</h6>
            <ul>
              <li>
                <Link href="/popular">
                  <a>Popular</a>
                </Link>
              </li>
              <li>
                <Link href="/trending">
                  <a>Trending</a>
                </Link>
              </li>
              <li>
                <Link href="/guided">
                  <a>Guided</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Company</h6>
            <ul>
              <li>
                <Link href="/press">
                  <a>Press</a>
                </Link>
              </li>
              <li>
                <Link href="/mission">
                  <a>Mission</a>
                </Link>
              </li>
              <li>
                <Link href="/strategy">
                  <a>Strategy</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Info</h6>
            <ul>
              <li>
                <Link href="/support">
                  <a>Support</a>
                </Link>
              </li>
              <li>
                <Link href="/customer-service">
                  <a>Customer Service</a>
                </Link>
              </li>
              <li>
                <Link href="/get-started">
                  <a>Get Started</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Follow Us</h6>
            <a href="https://www.facebook.com/MenofManual" target="_blank">
              fb
            </a>
            <a href="" target="_blank">
              google
            </a>
            <a href="https://twitter.com/MenofManual" target="_blank">
              twitter
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
