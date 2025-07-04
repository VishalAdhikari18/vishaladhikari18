import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vishal Singh Adhikari</span> from{" "}
            <span className="purple">Dehradun, India.</span>
            <br />
            I’m a backend web developer with a strong focus on building scalable server-side applications using{" "}
            <b className="purple">Node.js, Express.js</b>, and databases like{" "}
            <b className="purple">MongoDB</b> and <b className="purple">PostgreSQL</b>.
            <br />
            I’ve worked with tools like <b className="purple">Prisma, Mongoose, JWT,</b> and <b className="purple">bcrypt</b> to build secure and efficient APIs.
            <br />
            I enjoy writing clean, modular code and always aim to deliver reliable backend solutions.
            <br />
            <br />
            Apart from coding, some activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with passion, create with purpose!"
          </p>
          <footer className="blockquote-footer">Vishal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
