import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Tempor nostrud magna culpa deserunt esse officia tempor culpa
              culpa est ut nulla elit. Mollit aliquip reprehenderit eu
              adipisicing elit. Aute cillum nisi labore proident dolore id quis
              ullamco occaecat fugiat. Incididunt nulla Lorem laboris aute
              cillum. Aliqua sunt consequat deserunt ex excepteur voluptate
              aliqua elit consectetur officia. Minim veniam in non in et commodo
              nostrud sint tempor nulla non veniam excepteur et.
            </p>
            <Tabs defaultActiveKey="first" id="projects-tabs" className="mb-3">
              <Tab eventKey="first" title="Tab One">
                <Row>
                  {projects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })}
                </Row>
              </Tab>
              <Tab eventKey="second" title="Tab Two">
                Lorem Ipsum
              </Tab>
              <Tab eventKey="third" title="Tab Three">
                Lorem Ipsum
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
