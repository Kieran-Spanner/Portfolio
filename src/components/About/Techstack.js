import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import awsLogo from "../../Assets/aws-logo.svg";
import typescriptLogo from "../../Assets/typescript-logo.svg";
import dockerLogo from "../../Assets/docker-logo.svg";
import mysqlLogo from "../../Assets/mysql-logo.svg";
import gcpLogo from "../../Assets/gcp-logo.svg";
import bootstrapLogo from "../../Assets/bootstrap-logo.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={awsLogo} alt="AWS Logo" style={{ width: "50%", height: "auto" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={bootstrapLogo} alt="Bootstrap Logo" style={{ width: "50%", height: "auto" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={typescriptLogo} alt="Typescript Logo" style={{ width: "50%", height: "auto" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={dockerLogo} alt="Docker Logo" style={{ width: "50%", height: "auto" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={mysqlLogo} alt="MySQL Logo" style={{ width: "50%", height: "auto" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={gcpLogo} alt="GCP Logo" style={{ width: "50%", height: "auto" }} />
      </Col>
    </Row>
  );
}

export default Techstack;
