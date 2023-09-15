import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import gptletter from "../../Assets/Projects/gpt_letter.png";
// import svg file Logo_kpodp.svg
import kpodp from "../../Assets/Projects/Logo_kpodp.svg";
import foodkab from "../../Assets/Projects/foodkab.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kpodp}
              isBlog={false}
              title="KP Open Data Portal"
              description="An open data portal built for the KP government using Python, PostgreSQL, CKAN, and JavaScript."
              demoLink="https://opendata.kp.gov.pk/"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gptletter}
              isBlog={false}
              title="GPT4 Cover Letter writer"
              description="An intuitive website leveraging the GPT-4 API to assist users in crafting and designing professional cover letters."
              demoLink="https://www.gptletterwriter.com/"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sorting algorithms visualized"
              description="A ReactJS-based application visualizing key sorting algorithms including bubble, insertion, selection, merge, quick, heap, and radix sorts, complete with their time complexities."
              ghLink="https://github.com/aliwaqas333/sorting-algorithms-visualized-react"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodkab}
              isBlog={false}
              title="Foodkab"
              description="A user-friendly platform for ordering homemade food online from local chefs in your vicinity."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
