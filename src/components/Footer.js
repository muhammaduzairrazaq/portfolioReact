import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";


export const Footer = ()=> {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="linkhere"><img src={navIcon1} alt="icon" /></a>
                            <a href="linkhere"><img src={navIcon2} alt="icon" /></a>
                            <a href="linkhere"><img src={navIcon3} alt="icon" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Revserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}