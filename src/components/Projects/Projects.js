import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import hackathon from "../../Assets/about.png";
import Linklater from "../../Assets/Projects/Linklater.png";
import Pinterest from "../../Assets/Projects/Pinterest.png";
import courseselling from "../../Assets/Projects/courseselling.png";
import similar from "../../Assets/Projects/similar.png";
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
              imgPath={Linklater}
              isBlog={false}
              title="LinkLater"
              description="Linklater is a full-stack web application that enables users to embed and preview content from various platforms simply by pasting a URL. It intelligently detects and renders embeddable previews for YouTube videos, LinkedIn posts, Twitter Post, Threads Post, and more within sleek, interactive cards. The platform is built with the MERN stack (MongoDB, Express.js, React.js, and Node.js), providing robust backend support, efficient API handling, and responsive, modern UI design. Linklater offers a smooth and engaging content-sharing experience across devices."
              demoLink="https://link-later.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Crypto Hack!"
              description="Crypto Hack is a web application designed to provide users with real-time data on cryptocurrency prices and market trends. The platform allows users to track various cryptocurrencies, view historical performance, and analyze market fluctuations. Built using React.js and powered by an API for live data, it features a clean, user-friendly interface for navigating through different coins, market insights, and price comparisons. The app includes interactive charts for visualizing price movements and supports search and filtering for quick access to specific coins. Designed with responsiveness in mind, it delivers a seamless experience across both desktop and mobile devices."
              ghLink="https://github.com/VishalAdhikari18/crypto_hack"
              demoLink="https://crypto-hack.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pinterest}
              isBlog={false}
              title="Pinterest"
              description="Pinterest Clone (Backend) is a RESTful API service designed to support core functionalities of a Pinterest-like platform. Built with Node.js, Express.js, and MongoDB, the backend handles user authentication, pin creation, image metadata storage, and board management. It provides well-structured API endpoints for creating, retrieving, updating, and deleting pins and boards, with secure user access and scalable data modeling. This project focuses on building a robust and maintainable backend architecture for image-based content platforms."
              ghLink="https://github.com/VishalAdhikari18/pinterest"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={similar}
              isBlog={false}
              title="Similarity"
              description="Similarity Detection System is an intelligent backend solution designed to analyze and compare text inputs to identify semantic or structural similarities. Built using Node.js, Express.js, and NLP (Natural Language Processing) techniques, the system processes input data and computes similarity scores using algorithms such as cosine similarity, token-based matching, or vector embeddings. This project is ideal for use cases like plagiarism detection, document comparison, or duplicate content filtering, with a focus on efficiency, accuracy, and modular design for easy integration into larger systems."
              ghLink="https://github.com/VishalAdhikari18/similarity"
              demoLink="https://similarity-opj8.vercel.app/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courseselling}
              isBlog={false}
              title="Course Selling App"
              description="Course Selling App (Backend) is a robust RESTful API designed to power an online platform for selling and managing educational courses. Developed using Node.js, Express.js, and MongoDB, the backend handles key functionalities such as user authentication (JWT-based), role-based access control (admin, instructor, student), course creation and management, and secure payment integration. It provides structured endpoints for enrolling in courses, tracking user progress, and managing content access. The architecture is designed for scalability, security, and easy integration with frontend platforms or mobile apps."
              ghLink="https://github.com/VishalAdhikari18/coursesellingapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackathon}
              isBlog={false}
              title="Hackathon Management App"
              description="Developed a web application for an Edtech company that allows organizers to manage hackathons efficiently. Users can create, edit, and delete hackathon events with additional features like sorting, searching, and filtering for seamless event management. Built with React, the app provides an intuitive interface for enhanced user experience. The application leverages state management for dynamic data handling and ensures responsive design across devices. Modular component architecture and clean code structure make it easily maintainable and scalable for future feature integration."
              ghLink="https://github.com/VishalAdhikari18/hackathon"
              demoLink="https://hackathon-zeta-opal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RentUP"
              description="RentUp is an intuitive web application designed to streamline the rental property management process. It provides a user-friendly interface for landlords and tenants to manage rental listings, view property details, and track lease agreements. The platform is built with React.js, featuring a responsive design to ensure a seamless experience across various devices. Advanced features like real-time search, filtering options, and listing categorization improve usability and efficiency. The application follows clean UI principles and modular component design, making it both scalable and easy to maintain."
              ghLink="https://github.com/VishalAdhikari18/rentup"
              demoLink="https://rentup-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Result Analysis"
              description="Developed a data analysis tool that processes student performance data from CSV files. The application generates statistical insights like average marks, comparisons, and grade distributions, all visualized through interactive charts. It assists educators in identifying performance trends and areas of improvement. The project can be easily customized for various educational datasets, making it adaptable for different grading systems and academic institutions. The tool supports efficient data parsing and aggregation, ensuring accurate and fast report generation. It is designed with flexibility in mind, making it suitable for integration into academic dashboards or reporting systems."
              ghLink="https://github.com/VishalAdhikari18/Student-Result-Analysis"
                          
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
