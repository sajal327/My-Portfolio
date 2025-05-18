import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Parallax } from "react-parallax";
// import { TypeAnimation } from "react-type-animation";

import myProfileImage from "../assets/img/aboutimg.png";
import backgroundImage from "../assets/img/contact1bg.jpg";
import { FaDownload } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Parallax bgImage={backgroundImage} strength={300}>
      <section className="about-section" id="about">
        <div className="about-overlay"></div>
        <div className="about-content">
          <h2 className="about-heading" data-aos="fade-down">
            About Me
          </h2>

          <div className="about-container">
            {/* Image Section */}
            <div className="about-left" data-aos="fade-right">
              <div className="image-container">
                <img
                  src={myProfileImage}
                  alt="Sajal Laha"
                  className="about-profile-image-glow"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="about-right" data-aos="fade-left">
              <p className="about-intro">
                Hello! I'm <span className="highlight">Sajal Laha</span>, a
                dedicated{" "}
                <span className="highlight">Full Stack MERN Developer</span> and
                an aspiring <span className="highlight">DevOps Engineer</span>,
                currently studying{" "}
                <span className="highlight">Computer Science</span> at Cooch
                Behar Government Engineering College.
              </p>
              {/* <p className="about-intro">
                Hello! I'm <span className="highlight">Sajal Laha</span>, a
                <br />
                <TypeAnimation
                  sequence={[
                    "Full Stack MERN Developer",
                    2000,
                    "DevOps Engineer",
                    2000,
                    "Cloud Enthusiast",
                    2000,
                    "Tech Lead Partner",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="animated-roles"
                />
              </p> */}

              <p className="about-details">
                I'm passionate about building secure and scalable systems, and
                exploring technologies like{" "}
                <span className="highlight">Cloud Computing</span>,{" "}
                <span className="highlight">Web Development</span>, and{" "}
                <span className="highlight">Machine Learning</span>.
              </p>

              <div className="about-section-block">
                <p className="block-title">Internships:</p>
                <ul>
                  <li>AI for Beginners – HP LIFE</li>
                  <li>Cybersecurity Basics – IBM SkillsBuild</li>
                  <li>Data Science – OPTIFYX TECHNOLOGY</li>
                  <li>AICTE Internship – Edunet Foundation</li>
                  <li>Machine Learning – Atharvo.pvt.ltd</li>
                </ul>
              </div>

              <div className="about-section-block">
                <p className="block-title">Certifications:</p>
                <ul>
                  <li>Data Science</li>
                  <li>Introduction to Career Skills in Data Analytics</li>
                  <li>Python Bootcamp</li>
                  <li>The Complete Terraform with Ansible Bootcamp</li>
                  <li>AI for Beginners</li>
                  <li>Cybersecurity Analyst Job Simulation</li>
                  <li>JavaScript Project Course</li>
                </ul>
              </div>

              <div className="about-section-block">
                <p className="block-title">Work Experience:</p>
                <ul>
                  <li>
                    Freelance Developer - E-commerce Website, Tour Website
                    (React + MongoDB + Node.js + Express.js)
                  </li>
                  <li>
                    Artificial Intelligence Intern - Edunet Foundation (AICTE)
                  </li>
                </ul>
              </div>

              <a href="/resume.pdf" download className="resume-button">
                <FaDownload style={{ marginRight: "8px" }} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default About;

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import myProfileImage from "../assets/img/mypic.png";
// import backgroundImage from "../assets/img/contact1bg.jpg";
// import { FaDownload } from "react-icons/fa";

// const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 });
//   }, []);

//   return (
//     <section
//       className="about-section"
//       id="about"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <div className="about-overlay"></div>
//       <div className="about-content">
//         <h2 className="about-heading" data-aos="fade-down">
//           About Me
//         </h2>

//         <div className="about-container">
//           {/* Image Section */}
//           <div className="about-left" data-aos="fade-right">
//             <div className="image-container">
//               <img
//                 src={myProfileImage}
//                 alt="Sajal Laha"
//                 className="about-profile-image"
//               />
//             </div>
//           </div>

//           {/* Text Section */}
//           <div className="about-right" data-aos="fade-left">
//             <p className="about-intro">
//               Hello! I'm <span className="highlight">Sajal Laha</span>, a
//               dedicated{" "}
//               <span className="highlight">Full Stack MERN Developer</span> and
//               an aspiring <span className="highlight">DevOps Engineer</span>,
//               currently studying{" "}
//               <span className="highlight">Computer Science</span>.
//             </p>

//             <p className="about-details">
//               I'm passionate about building secure and scalable systems, and
//               exploring technologies like{" "}
//               <span className="highlight">Cloud Computing</span>,{" "}
//               <span className="highlight">Web Development</span>, and{" "}
//               <span className="highlight">Machine Learning</span>.
//             </p>

//             <div className="about-section-block">
//               <p className="block-title">Certifications:</p>
//               <ul>
//                 <li>AI for Beginners – HP LIFE</li>
//                 <li>Cybersecurity Basics – IBM SkillsBuild</li>
//                 <li>Data Science – OPTIFYX TECHNOLOGY</li>
//                 <li>AICTE Internship – Edunet Foundation</li>
//                 <li>Machine Learning – Oasis Infobyte</li>
//               </ul>
//             </div>

//             <div className="about-section-block">
//               <p className="block-title">Internships:</p>
//               <ul>
//                 <li>Data Science Intern – OPTIFYX TECHNOLOGY</li>
//                 <li>AI Virtual Intern – Edunet Foundation (AICTE)</li>
//                 <li>Machine Learning Intern – Oasis Infobyte</li>
//               </ul>
//             </div>

//             <div className="about-section-block">
//               <p className="block-title">Work Experience:</p>
//               <ul>
//                 <li>Tech Lead Partner - NextGenn Startup</li>
//                 <li>
//                   Freelance Developer - E-commerce Project (React + PostgreSQL +
//                   Strapi)
//                 </li>
//               </ul>
//             </div>

//             <a href="/resume/resume.pdf" download className="resume-button">
//               <FaDownload style={{ marginRight: "8px" }} />
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import myProfileImage from "../assets/img/mypic.png"; // Your profile picture
// import backgroundImage from "../assets/img/contact1bg.jpg"; // Your background image
// import { FaDownload } from "react-icons/fa";

// const About = () => {
//   return (
//     <section
//       className="about-section"
//       id="about"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       <div className="about-overlay"></div>
//       <div className="about-content">
//         <h2 className="about-heading">About Me</h2>
//         <div className="about-container">
//           {/* Left: Image */}
//           <div className="about-left">
//             <div className="image-container">
//               <img
//                 src={myProfileImage}
//                 alt="Sajal Laha"
//                 className="about-profile-image"
//                 // height={100}
//                 // width={100}
//               />
//             </div>
//           </div>

//           {/* Right: Text */}
//           <div className="about-right">
//             <p className="about-intro">
//               Hello! I'm <span className="highlight">Sajal Laha</span>, a
//               dedicated{" "}
//               <span className="highlight">Full Stack MERN Developer</span> and
//               an aspiring <span className="highlight">DevOps Engineer</span>{" "}
//               currently studying{" "}
//               <span className="highlight">Computer Science</span>.
//             </p>

//             <p className="about-details">
//               I'm passionate about building secure and scalable systems, and
//               exploring technologies like{" "}
//               <span className="highlight">Cloud Computing</span>,{" "}
//               <span className="highlight">Website Development</span>, and{" "}
//               <span className="highlight">Machine Learning</span>.
//             </p>

//             {/* Certifications */}
//             <div className="about-section-block">
//               <p className="block-title">Certifications:</p>
//               <ul>
//                 <li>AI for Beginners – HP LIFE</li>
//                 <li>Cybersecurity Basics – IBM SkillsBuild</li>
//                 <li>Data Science – OPTIFYX TECHNOLOGY</li>
//                 <li>AICTE Internship – Edunet Foundation</li>
//                 <li>Machine Learning – Oasis Infobyte</li>
//               </ul>
//             </div>

//             {/* Internships */}
//             <div className="about-section-block">
//               <p className="block-title">Internships:</p>
//               <ul>
//                 <li>Data Science Intern – OPTIFYX TECHNOLOGY</li>
//                 <li>AI Virtual Intern – Edunet Foundation (AICTE)</li>
//                 <li>Machine Learning Intern – Oasis Infobyte</li>
//               </ul>
//             </div>

//             {/* Work Experience */}
//             <div className="about-section-block">
//               <p className="block-title">Work Experience:</p>
//               <ul>
//                 <li>Tech Lead Partner - NextGenn Startup</li>
//                 <li>
//                   Freelance Developer - E-commerce Project (React + PostgreSQL +
//                   Strapi)
//                 </li>
//               </ul>
//             </div>

//             {/* Resume Button */}
//             <a href="/resume.pdf" download className="resume-button">
//               <FaDownload style={{ marginRight: "8px" }} />
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default About;

// import React from "react";
// import myProfileImage from "../assets/img/mypic.png"; // Your profile picture
// import backgroundImage from "../assets/img/contact1bg.jpg"; // Your background image
// import { FaDownload } from "react-icons/fa";

// const About = () => {
//   return (
//     <section
//       className="about-section"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//       }}
//     >
//       <div className="overlay"></div>
//       <h2 className="about-title">About Me</h2>
//       <div className="about-container">
//         {/* Profile Image */}
//         <div className="about-left">
//           <img
//             src={myProfileImage}
//             alt="Sajal Laha"
//             className="about-profile-image"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="about-right">
//           <p className="about-intro">
//             Hello! I'm <span className="highlight">Sajal Laha</span>, a
//             passionate{" "}
//             <span className="highlight">Full Stack MERN Developer</span> and
//             aspiring <span className="highlight">DevOps Engineer</span>{" "}
//             currently pursuing my studies in{" "}
//             <span className="highlight">Computer Science</span>.
//           </p>
//           <p className="about-details">
//             I have a deep interest in{" "}
//             <span className="highlight">Machine Learning</span>,{" "}
//             <span className="highlight">Cloud Computing</span>, and{" "}
//             <span className="highlight">Cybersecurity</span>. I'm passionate
//             about building secure, scalable backend systems and beautiful UIs.
//           </p>
//           <div className="about-certifications">
//             <p>
//               ✅ <strong>Certifications:</strong>
//             </p>
//             <ul>
//               <li>AI for Beginners – HP LIFE</li>
//               <li>Cybersecurity Basics – IBM SkillsBuild</li>
//               <li>Data Science Internship – OPTIFYX TECHNOLOGY</li>
//               <li>AICTE Virtual Internship – Edunet Foundation</li>
//               <li>Machine Learning Projects – Oasis Infobyte</li>
//             </ul>
//           </div>

//           {/* Resume Button */}
//           <a href="/Sajal_Laha_Resume.pdf" download className="resume-button">
//             <FaDownload style={{ marginRight: "8px" }} />
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
