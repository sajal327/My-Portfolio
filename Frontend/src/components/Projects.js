import { useInView } from "react-intersection-observer";
import bgImage from "../assets/img/project.jpg";
import pgImg from "../assets/img/pgimg.jpg";
import tour from "../assets/img/tour.png";
import bookstore from "../assets/img/Bookstore.png";
import bornpretty from "../assets/img/Bornpretty.png";
import portfolio from "../assets/img/portfolio1.png";
import microservice from "../assets/img/microservice.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "E-commerce Website",
    subtitle: "UI/UX Design, Full Stack, SpringBoot",
    description:
      "A full-featured e-commerce store built with React and SpringBoot.",
    imgUrl: bornpretty,
    link: "https://bornpretty.onrender.com",
  },
  {
    title: "Tour & Travel App",
    subtitle: "Design, Full Stack, Backend",
    description:
      "A MERN-based tour booking platform with user authentication and Admin panel.",
    imgUrl: tour,
    link: "https://hillsholidays.in/home",
  },
  {
    title: "Portfolio Website",
    subtitle: "Frontend Development",
    description: "A personal portfolio showcasing projects and skills.",
    imgUrl: portfolio,
    link: "https://my-portfolio-ak4e.onrender.com",
  },
  {
    title: "AI Chatbot",
    subtitle: "Machine Learning, UI (On going)",
    description: "Conversational AI chatbot built using NLP techniques.",
    imgUrl: pgImg,
    link: "",
  },
  {
    title: "Bookstore REST API",
    subtitle: "Backend, Node.js",
    description: "REST API for a book store with user authentication.",
    imgUrl: bookstore,
    link: "https://github.com/sajal327/Bookstore-REST-API",
  },
  {
    title: "Fitness Tracker",
    subtitle: "React, Microservices, AWS, Kafka",
    description:
      "Web app to track workouts and progress visually with AI recommendations.",
    imgUrl: microservice,
    link: "https://github.com/sajal327/fitness-microservice",
  },
];

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      style={{ "--bg-image": `url(${bgImage})` }}
    >
      <div className="container-p">
        <h2 className="section-title">Projects</h2>
        <div className={`projects-grid ${inView ? "fade-in" : ""}`} ref={ref}>
          {projects.map((project, idx) => (
            <div
              className="project-card"
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={project.imgUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="subtitle">{project.subtitle}</p>
                <p className="description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-btn"
                >
                  View Project
                </a>

                {/* <button className="view-btn">View Project</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import ProjectCard from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Projects = () => {
//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Projects</h2>
//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                   <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                     <Nav
//                       variant="pills"
//                       className="nav-pills mb-5 justify-content-center align-items-center"
//                       id="pills-tab"
//                     >
//                       <Nav.Item>
//                         <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                       </Nav.Item>
//                       <Nav.Item>
//                         <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                       </Nav.Item>
//                     </Nav>
//                     <Tab.Content
//                       id="slideInUp"
//                       className={
//                         isVisible ? "animate__animated animate__slideInUp" : ""
//                       }
//                     >
//                       <Tab.Pane eventKey="first">
//                         <Row>
//                           {projects.map((project, index) => {
//                             return <ProjectCard key={index} {...project} />;
//                           })}
//                         </Row>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="section">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Cumque quam, quod neque provident velit, rem
//                           explicabo excepturi id illo molestiae blanditiis,
//                           eligendi dicta officiis asperiores delectus quasi
//                           inventore debitis quo.
//                         </p>
//                       </Tab.Pane>
//                       <Tab.Pane eventKey="third">
//                         <p>
//                           Lorem ipsum dolor sit amet consectetur adipisicing
//                           elit. Cumque quam, quod neque provident velit, rem
//                           explicabo excepturi id illo molestiae blanditiis,
//                           eligendi dicta officiis asperiores delectus quasi
//                           inventore debitis quo.
//                         </p>
//                       </Tab.Pane>
//                     </Tab.Content>
//                   </Tab.Container>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   );
// };
