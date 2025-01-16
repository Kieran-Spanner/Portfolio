import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get To Know Me
            </h1>
             <p style={{ fontSize: "1.3em", paddingBottom: "20px" }}>
                        Hi I am Kieran from Geelong, Australia
                        <br />
                        I am currently completing my bachelor degree in computer science at Swinburne University
                        <br />
                        I am majoring in Artifical Intelligence and Internet of Things
                        <br />
                        Outside of software development I enjoy travelling, surfing and competing in IRB racing
                      </p>          
        </Row>
        <h1 className="project-heading">
          Skills and Strength
        </h1>
        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
