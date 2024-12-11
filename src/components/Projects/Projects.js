import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import expense from "../../Assets/Projects/Expense tracker.webp"
import ecommerce from "../../Assets/Projects/ecommerce.jpg"
import detection from "../../Assets/Projects/detection.jpg"
import tracker from "../../Assets/Projects/tracker.jpg"

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
              imgPath={detection}
              isBlog={false}
              title="Visual Fall detection system using Computer vision"
              description="Fall detection system utilizing security cameras, computer vision, and deep learning
algorithms. This system accurately identifies fall-related movements,thereby
enhancing the safety and well-being of individuals at risk of falling.Integrated multi-angle videos and multi-person tracking for
heightened accuracy, enabling immediate alerts and timely assistance in case of a fall. "
              ghLink="https://github.com/Komali2002/Visual-Fall-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Application (MERN STACK)"
              description="Designed and implemented a user-friendly, menu-driven interface for an e-commerce application website, allowing
seamless navigation for users to explore product categories, view product details, and access account features. Leveraged
the MERN stack, integrating MongoDB for database management, Express.js for server-side logic.e. Utilized React.js
to create intuitive front-end components"
              ghLink="https://github.com/Komali2002/E-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Expense tracker"
              description="We often end up spending money without even realizing it. Generally,
we won’t be aware of when and why are we spending money and how much we
spend.It is difficult for us to analyze our expenses spent on various categories
manually. So, having an expense tracker app would help us in having control over
money, setting financial goals, avoiding financial risks, sticking to the budget and
good personal financial management."
              ghLink="https://github.com/Komali2002/Expense-tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
