import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
        HELLO, I'M <span className="purple"> ALI WAQAS </span>
    </h1>
    <p className="home-about-body">
       
        <br /><br />
        My journey as a developer at <i>PMR Unit, Peshawar</i> empowered me to design and develop open data portals using the <i>MERN Stack</i>. From frontend development using <b className="purple">React.Js, Next.Js, and Material UI</b> to backend integrations with <i><b className="purple">ExpressJS, MongoDB, and PostgreSQL</b></i>, I've been hands-on with the full web development cycle.
        <br /><br />
        My summer internship with <i>Code for Pakistan</i> further honed my design sensibilities, where I actively participated in <b className="purple">UI/UX Workshops</b>, emphasizing user-centric design and effective color schemes.
        <br /><br />
        With solid experience in cloud deployment using <b className="purple">AWS</b>, I've also managed projects leveraging <i>AGILE methodologies</i>. Tools like <i><b className="purple">GIT, GitHub Actions, Docker, and Heroku</b></i> have been instrumental in my project management and deployment processes.
        <br /><br />
        Let's connect and transform ideas into digital realities. Find me on <a href="https://github.com/aliwaqas333" target="_blank" className="purple">GitHub</a> or <a href="https://linkedin.com/in/engrr-ali-waqas" target="_blank" className="purple">LinkedIn</a>.
        Passionate about deep learning and computer vision, I've worked extensively with tools like <i><b className="purple">PyTorch, CNN, and Unreal Engine</b></i>. 
        <br /><br />
   
   </p>
</Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/aliwaqas333"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/waqasaps"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/engrr.ali.waqas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
