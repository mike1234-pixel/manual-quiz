import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import hairLoss from "../public/images/layout/hair-loss.jpg";
import erectileDysfunction from "../public/images/layout/erectile-dysfunction.jpg";
import Category from "../components/category";
import Footer from "../components/footer";
import logo from "../public/images/logos/symbol.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Manual</title>
        <meta name="description" content="manual quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.hero}>
        <Container>
          <Row>
            <Col lg={5}>
              <div className={styles.hero__logo}>
                <Image src={logo} alt="manual logo" />
              </div>
              <div className={styles.hero__content}>
                <h1>Be good to yourself</h1>
                <p>
                  We’re working around the clock to bring you a holistic
                  approach to your wellness. From top to bottom, inside and out.
                </p>
                <Link href="/quiz">
                  <a className={styles.button}>take the quiz</a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <main>
        <section className={styles.main}>
          <Container>
            <Row>
              <Col>
                <div className={styles.main__title}>
                  <h2>What we can help with</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Category
          sectionNumber={1}
          img={hairLoss}
          imageOrder={1}
          textOrder={2}
          categoryName={"Hair loss"}
          heading={"Hair loss needn’t be irreversible. We can help!"}
          text={
            "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
          }
        />
        <Category
          sectionNumber={2}
          img={erectileDysfunction}
          imageOrder={2}
          textOrder={1}
          categoryName={"Erectile dysfunction"}
          heading={"Erections can be a tricky thing. But no need to feel down!"}
          text={
            "We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out."
          }
        />
        <Footer />
      </main>
    </div>
  );
}
