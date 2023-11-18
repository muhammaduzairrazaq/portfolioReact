import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Full Stack Developer", "Python Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcom to my Portfolio</span>
            <h1>{'Hi Iam Uzair '}<span className="wrap">{text}</span></h1>
            <p>Cupidatat et cillum laboris et aliqua. Amet velit laboris ad in nulla ullamco et sit do. Dolor excepteur voluptate est amet est exercitation ad. Minim adipisicing eu cillum ex aute in. Aliqua velit nulla nostrud dolor. Adipisicing labore magna dolore pariatur mollit et. Aliquip velit cillum eu proident.</p>
        </Col>
        <Col>
        <img src={headerImg} alt="Img"></img>
        </Col>
      </Row>
      </Container>
    </section>
  )
}
