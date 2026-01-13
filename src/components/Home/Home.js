import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const handleConsultationClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} xs={12} className="home-header">
              <h1 
                className="heading" 
                style={{ 
                  paddingBottom: 15,
                  paddingLeft: '50px',
                  lineHeight: 1.3,
                  fontSize: 'clamp(2em, 5vw, 2.8em)'
                }}
              >
                Ready to Grow Your Restaurant? 🚀
              </h1>

              <h1 
                className="heading-name"
                style={{
                  paddingLeft: '45px',
                  lineHeight: 1.3,
                  fontSize: 'clamp(1.8em, 4vw, 2.5em)'
                }}
              >
                <strong className="main-name">Building Digital Experiences for Modern Restaurants</strong>
              </h1>

              <div 
                style={{ 
                  padding: '50px 50px 30px 50px',
                  textAlign: "left" 
                }}
                className="typewriter-container"
              >
                <Type />
              </div>

              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  paddingLeft: '50px',
                  paddingRight: '50px',
                  maxWidth: '500px'
                }}
                className="cta-buttons-container"
              >
                <Button 
                  variant="primary"
                  size="lg"
                  onClick={handleConsultationClick}
                  className="cta-primary"
                  aria-label="Schedule your free website consultation"
                  style={{
                    backgroundColor: '#ff6b35',
                    border: 'none',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.3)'
                  }}
                >
                  Schedule Your Free Website Consultation
                </Button>
                
                <Button 
                  as={Link}
                  to="/project"
                  variant="outline-light"
                  size="lg"
                  className="cta-outline"
                  aria-label="View our restaurant portfolio"
                  style={{
                    border: '2px solid #ff6b35',
                    color: '#ff6b35',
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'transparent',
                    textDecoration: 'none'
                  }}
                >
                  View Restaurant Portfolio
                </Button>
              </div>
            </Col>

            <Col md={5} xs={12} style={{ paddingBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={homeLogo}
                alt="restaurant website illustration"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
