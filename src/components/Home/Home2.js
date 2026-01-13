import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { 
  MdTrendingUp, 
  MdPhoneDisabled, 
  MdCalendarToday, 
  MdSearch 
} from "react-icons/md";

function Home2() {
  const benefits = [
    {
      icon: <MdTrendingUp size={50} />,
      title: "Increase Online Orders",
      description: "Boost revenue with a streamlined online ordering system that converts visitors into customers"
    },
    {
      icon: <MdPhoneDisabled size={50} />,
      title: "Reduce Phone Calls",
      description: "Let customers order online and book tables automatically, freeing up your staff"
    },
    {
      icon: <MdCalendarToday size={50} />,
      title: "24/7 Booking System",
      description: "Accept reservations around the clock with an automated booking platform"
    },
    {
      icon: <MdSearch size={50} />,
      title: "SEO Optimized",
      description: "Get found on Google with websites built for search engine visibility"
    }
  ];

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ marginBottom: '80px' }}>
          <Col md={12} style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{ fontSize: "2.6em", lineHeight: 1.3 }}>
              Why Choose Our <span className="purple">Restaurant Web Services?</span>
            </h1>
            <p style={{ fontSize: "1.2em", color: "rgba(255, 255, 255, 0.8)", marginTop: '20px' }}>
              Built specifically for restaurants to grow their online presence
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: 'center', paddingBottom: '60px' }}>
          {benefits.map((benefit, index) => (
            <Col md={6} lg={3} key={index} style={{ marginBottom: '30px' }}>
              <Card 
                className="benefit-card"
                style={{
                  background: 'linear-gradient(145deg, rgba(123, 31, 162, 0.1), rgba(103, 58, 183, 0.05))',
                  border: '1px solid rgba(197, 112, 240, 0.2)',
                  borderRadius: '15px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  color: 'white'
                }}
              >
                <div 
                  style={{
                    color: '#ff6b35',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {benefit.icon}
                </div>
                <h3 
                  style={{
                    fontSize: '1.3em',
                    marginBottom: '15px',
                    color: '#c770f0',
                    fontWeight: '600'
                  }}
                >
                  {benefit.title}
                </h3>
                <p 
                  style={{
                    fontSize: '1em',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.6'
                  }}
                >
                  {benefit.description}
                </p>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", lineHeight: 1.3 }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I specialize in backend development, with hands-on experience in
              building robust and scalable server-side applications using{" "}
              <b className="purple">Node.js</b> and{" "}
              <b className="purple">Express.js</b>.
              <br />
              <br />
              My core strengths lie in architecting{" "}
              <b className="purple">RESTful APIs</b>, managing databases
              efficiently, and integrating modern backend tooling to deliver
              high-performance applications.
              <br />
              <br />
              I'm proficient in working with{" "}
              <b className="purple">MongoDB</b> and{" "}
              <b className="purple">PostgreSQL</b>, using both{" "}
              <b className="purple">Mongoose</b> and{" "}
              <b className="purple">Prisma ORM</b> to manage complex data models
              with ease and maintain type safety and performance.
              <br />
              <br />
              I also have experience with <b className="purple">SQL</b> for
              relational data and know how to optimize queries and design
              schemas for real-world applications.
              <br />
              <br />
              In the Node.js ecosystem, I work with a wide range of tools and
              libraries including{" "}
              <b className="purple">
                bcrypt, jsonwebtoken, nodemailer, multer, zod, and dotenv
              </b>
              , among others.
              <br />
              <br />
              I focus on implementing{" "}
              <b className="purple">authentication</b>,{" "}
              <b className="purple">authorization</b>,{" "}
              <b className="purple">file handling</b>,{" "}
              <b className="purple">real-time communication</b>, and{" "}
              <b className="purple">environment configuration</b> to enhance app
              functionality and security.
              <br />
              <br />
              I follow best practices for{" "}
              <b className="purple">modular code structure</b>,{" "}
              <b className="purple">error handling</b>, and{" "}
              <b className="purple">version control</b> using{" "}
              <b className="purple">Git & GitHub</b>, ensuring team
              collaboration and code reliability.
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
                  href="https://github.com/VishalAdhikari18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/18_Vishal_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vishaladhikari1817/"
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
