import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import laptopImg from "../../Assets/about.png";


function Skills() {
  return (
    <Container fluid className="skill-section">
      <Container>
        <div>
          <h1 className="mb-4">Techstack</h1>
        <Techstack/>
        </div>
        <h1 className="mb-4">Toolstack</h1>
        <Toolstack/>
      </Container>
    </Container>
  );
}

export default Skills;
