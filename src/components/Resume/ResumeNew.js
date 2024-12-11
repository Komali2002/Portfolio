import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative",marginTop:"150px"}}>
         <Button
            variant="primary"
            href={"https://drive.google.com/file/d/18heowJ6ba70f9D1cKJ4ojlUA3ifAgd2p/view?usp=sharing"}
            target="_blank"
            style={{ maxWidth: "300px",maxHeight: "300px"}}
          >
            <AiOutlineDownload />
            &nbsp;Resume
          </Button>
        </Row> 
      </Container>
    </div>
  );
}

export default ResumeNew;
