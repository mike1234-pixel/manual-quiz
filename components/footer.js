import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../public/images/logos/symbol.png";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={1}>
            <div className={styles.footer__logo}>
              <Image src={logo} alt="manual logo" />
            </div>
          </Col>
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
            <a
              className={styles.footer__social}
              href="https://www.facebook.com/MenofManual"
              target="_blank"
            >
              <FaFacebookF style={{ width: 12.5, height: 20 }} />
            </a>
            <a className={styles.footer__social} href="" target="_blank">
              <FaGoogle style={{ width: 18, height: 18 }} />
            </a>
            <a
              className={styles.footer__social}
              href="https://twitter.com/MenofManual"
              target="_blank"
            >
              <FaTwitter style={{ width: 21, height: 17 }} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
