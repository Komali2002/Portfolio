import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cherukoori Komali </span>
            from <span className="purple">Hyderabad, India.</span>
            <br />
            <br />
            I am a <span className="purple">2024 Graduate</span>.I have completed my B.Tech from VNR Vignana Jyothi Institute of technology,Hyderabad.
            <br />
            <br/>
            <p style={{marginTop:"10px"}}>
            I am a highly motivated and proactive IT professional with 1.5 years of hands-on experience in application development. Currently employed as an <span className="purple">Application Engineer at Flipkart</span>, specializing in CI/CD pipelines, backend development, and deploying services using Kubernetes and Helm.Proficient in React.js, Redux, TypeScript, Sequelize, Power BI, and Snowflake, with additional internship experience in web development and data analytics.
            </p>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Paper Crafts and Drawing
            </li>
          </ul>
          <footer className="blockquote-footer mt-2">Komali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
