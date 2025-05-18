import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import backgroundImage1 from "../assets/img/skillbg.jpg";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/javascript.png";
import nodejs from "../assets/img/nodejs.png";
import express from "../assets/img/expressjs.png";
import mongo from "../assets/img/mongodb.png";
import reactLogo from "../assets/img/react.png";
import tailwind from "../assets/img/tailwindcss.png";
import git from "../assets/img/git.png";
import python from "../assets/img/python.png";
import java from "../assets/img/java.png";
import cpp from "../assets/img/c++.png";
import firebase from "../assets/img/firebase.png";
import gcp from "../assets/img/gcp.png";
import docker from "../assets/img/docker.png";
import linux from "../assets/img/linux.png";
import ai from "../assets/img/ml.png";
import kubernetes from "../assets/img/kubernetes.png";
import flutter from "../assets/img/flutter.png";
import devops from "../assets/img/devops.png";
import jenkins from "../assets/img/jenkins.png";
import aws from "../assets/img/aws.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const skillsData = [
  { name: "HTML", value: 90 },
  { name: "CSS", value: 95 },
  { name: "JavaScript", value: 75 },
  { name: "React", value: 85 },
  { name: "Node.js", value: 90 },
  { name: "MongoDB", value: 90 },
  { name: "Flutter", value: 70 },
  { name: "Firebase", value: 60 },
  { name: "TailwindCSS", value: 80 },
  { name: "ExpressJS", value: 85 },
  { name: "Git", value: 80 },
  { name: "Python", value: 70 },
  { name: "Java", value: 70 },
  { name: "C++", value: 80 },
  { name: "GCP", value: 30 },
  { name: "AWS", value: 25 },
  { name: "AWS", value: 40 },
  { name: "Docker", value: 15 },
  { name: "Kubernetes", value: 10 },
  { name: "Jenkins", value: 55 },
  { name: "DevOps", value: 10 },
  { name: "Linux", value: 45 },
  { name: "AI", value: 55 },
];

const tools = [
  { name: "HTML", desc: "Design tool", img: html },
  { name: "CSS", desc: "User Interface", img: css },
  { name: "JavaScript", desc: "Interaction", img: js },
  { name: "NodeJS", desc: "Web Server", img: nodejs },
  { name: "ExpressJS", desc: "Node Framework", img: express },
  { name: "MongoDB", desc: "Database", img: mongo },
  { name: "React", desc: "Framework", img: reactLogo },
  { name: "TailwindCSS", desc: "User Interface", img: tailwind },

  { name: "C++", desc: "Interaction", img: cpp },
  { name: "Java", desc: "Interaction", img: java },
  { name: "Python", desc: "User Interface", img: python },

  { name: "Linux", desc: "User Interface", img: linux },
  { name: "Docker", desc: "Node Framework", img: docker },
  { name: "Kubernetes", desc: "Database", img: kubernetes },
  { name: "Jenkins", desc: "Web Server", img: jenkins },
  { name: "DevOps", desc: "Framework", img: devops },
  { name: "GCP", desc: "Web Server", img: gcp },
  { name: "AWS", desc: "Web Server", img: aws },

  { name: "AI/ML", desc: "Interaction", img: ai },
  { name: "Firebase", desc: "Web Server", img: firebase },
  { name: "Flutter", desc: "Web Server", img: flutter },
  { name: "Git", desc: "Design tool", img: git },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const gradientId = "CoolTechGradient";
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow left-arrow"
      aria-label="Previous"
    >
      <FaArrowLeft />
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-arrow right-arrow"
      aria-label="Next"
    >
      <FaArrowRight />
    </button>
  );

  const rows = [
    tools.slice(0, 7), // Row 1
    tools.slice(7, 14), // Row 2
    tools.slice(14, 20), // Row 3
  ];

  return (
    <section
      className="skill"
      id="skills"
      style={{ backgroundImage: `url(${backgroundImage1})` }}
      ref={ref}
    >
      {/* Inject gradient globally */}
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#005ba1" />
            <stop offset="100%" stopColor="#8602bf" />
            {/* <stop offset="0%" stopColor="#1bb2f2" />
            <stop offset="100%" stopColor="#005ba1" /> */}
          </linearGradient>

          {/* <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0970ed" />
            <stop offset="100%" stopColor="#2c6882" />
            <stop offset="0%" stopColor="#c916c9" />
            <stop offset="100%" stopColor="#4502d6" />
            <stop offset="0%" stopColor="#4a00e0" />
            <stop offset="100%" stopColor="#822c82" />
            #5f2c82"
          </linearGradient> */}
        </defs>
      </svg>
      <div className="container">
        <div className="skill-bx wow zoomIn" data-aos="fade-up">
          <h2 data-aos="fade-down">Skills</h2>

          <div className="tools-section" data-aos="fade-up">
            <p>Here are some of my technical skills with proficiency levels.</p>

            <div className="animated-tools" data-aos="zoom-in-up">
              {rows.map((row, rowIndex) => (
                <div className={`scroll-row row-${rowIndex}`} key={rowIndex}>
                  {[...row, ...row].map((tool, index) => (
                    <div className="tool-card" key={`${rowIndex}-${index}`}>
                      <img src={tool.img} alt={tool.name} />
                      <h4>{tool.name}</h4>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            className="owl-carousel owl-theme skill-slider"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {skillsData.map((skill, index) => (
              <div className="item" key={index} data-aos="fade-up">
                <div style={{ width: 120, height: 120, margin: "0 auto" }}>
                  <CircularProgressbar
                    value={inView ? skill.value : 0}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      pathColor: `url(#${gradientId})`,
                      textColor: "#fff",
                      trailColor: "#444",
                      textSize: "16px",
                      pathTransitionDuration: 2,
                    })}
                  />
                </div>
                <h5>{skill.name}</h5>
              </div>
            ))}
          </Carousel>
        </div>

        {/* <div className="skill-bx wow zoomIn">
          <h2>Skills</h2>
          <div className="tools-section">
            <p>Here are some of my technical skills with proficiency levels.</p>
            <div className="animated-tools">
              {rows.map((row, rowIndex) => (
                <div className={`scroll-row row-${rowIndex}`} key={rowIndex}>
                  {[...row, ...row].map((tool, index) => (
                    <div className="tool-card" key={`${rowIndex}-${index}`}>
                      <img src={tool.img} alt={tool.name} />
                      <h4>{tool.name}</h4>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            className="owl-carousel owl-theme skill-slider"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            {skillsData.map((skill, index) => (
              <div className="item" key={index}>
                <div style={{ width: 120, height: 120, margin: "0 auto" }}>
                  <CircularProgressbar
                    value={inView ? skill.value : 0}
                    text={`${skill.value}%`}
                    styles={buildStyles({
                      pathColor: `url(#${gradientId})`,
                      textColor: "#fff",
                      trailColor: "#444",
                      textSize: "16px",
                      pathTransitionDuration: 2,
                    })}
                  ></CircularProgressbar>
                </div>
                <h5>{skill.name}</h5>
              </div>
            ))}
          </Carousel>
        </div> */}
      </div>
    </section>
  );
};

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useInView } from "react-intersection-observer";
// import colorSharp from "../assets/img/color-sharp.png";
// import backgroundImage1 from "../assets/img/skillbg.jpg";

// const skillsData = [
//   { name: "HTML", value: 90, color: "#e34c26" },
//   { name: "CSS", value: 85, color: "#264de4" },
//   { name: "JavaScript", value: 80, color: "#f0db4f" },
//   { name: "React", value: 75, color: "#61dafb" },
//   { name: "Node.js", value: 70, color: "#68a063" },
//   { name: "MongoDB", value: 65, color: "#4db33d" },
//   { name: "Flutter", value: 60, color: "#02569B" },
//   { name: "Firebase", value: 55, color: "#FFA611" },
// ];

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// export const Skills = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <section
//       className="skill"
//       id="skills"
//       style={{ backgroundImage: `url(${backgroundImage1})` }}
//       ref={ref}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="skill-bx wow zoomIn">
//               <h2>Skills</h2>
//               <p>
//                 Here are some of my technical skills with proficiency levels.
//               </p>
//               <Carousel
//                 responsive={responsive}
//                 infinite={true}
//                 className="owl-carousel owl-theme skill-slider"
//               >
//                 {skillsData.map((skill, index) => (
//                   <div className="item" key={index}>
//                     <div style={{ width: 150, height: 150, margin: "0 auto" }}>
//                       <CircularProgressbar
//                         value={inView ? skill.value : 0}
//                         text={`${skill.value}%`}
//                         styles={buildStyles({
//                           pathColor: skill.color,
//                           textColor: "#fff",
//                           trailColor: "#d6d6d6",
//                           backgroundColor: "#3e98c7",
//                           textSize: "16px",
//                           pathTransitionDuration: 1.5,
//                         })}
//                       />
//                     </div>
//                     <h5 style={{ marginTop: "15px" }}>{skill.name}</h5>
//                   </div>
//                 ))}
//               </Carousel>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <img
//         className="background-image-left"
//         src={colorSharp}
//         alt="Background"
//       /> */}
//     </section>
//   );
// };
