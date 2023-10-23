import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter2.svg"
import colorsharp from "..//assets/img/color-sharp.png"


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Ad id enim cupidatat ex deserunt anim ad Lorem nostrud amet cupidatat ea. Id magna aute excepteur laborum nulla ipsum in commodo. Nisi pariatur adipisicing consequat fugiat anim consequat exercitation aute anim cupidatat magna. Deserunt non tempor qui ut irure aute exercitation eu voluptate ipsum est qui.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                     <img src={meter1} alt="Image" />
                                     <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                     <img src={meter2} alt="Image" />
                                     <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                     <img src={meter3} alt="Image" />
                                     <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                     <img src={meter1} alt="Image" />
                                     <h5>Web Development</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src ={colorsharp}/>
        </section>
      )
}

export default Skills;
