import React from "react";

const ProjectCard = ({ image, title, subtitle, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-subtitle">{subtitle}</p>
        <p className="project-description">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

// import { Col } from "react-bootstrap";
// import TrackVisibility from "react-on-screen";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <TrackVisibility once>
//       {({ isVisible }) => (
//         <Col
//           size={12}
//           sm={6}
//           md={4}
//           className={isVisible ? "animate__animated animate__fadeInUp" : ""}
//         >
//           <div className="proj-imgbx">
//             <img src={imgUrl} alt={title} />
//             <div className="proj-txtx">
//               <h4>{title}</h4>
//               <span>{description}</span>
//             </div>
//           </div>
//         </Col>
//       )}
//     </TrackVisibility>
//   );
// };

// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
