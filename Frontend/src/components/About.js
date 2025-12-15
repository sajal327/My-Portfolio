import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
import { FaDownload } from "react-icons/fa";

import myProfileImage from "../assets/img/aboutimg.png";
import backgroundImage from "../assets/img/contact1bg.jpg";

const ABOUT_SECTIONS = [
  {
    title: "Internships",
    items: [
      "UNIHOX - Full Stack Development Internship",
      "AI for Beginners - HP LIFE",
      "Cybersecurity Basics - IBM SkillsBuild",
      "Data Science - OPTIFYX Technology",
      "AICTE Internship - Edunet Foundation",
      "Machine Learning - Atharvo Pvt. Ltd.",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Full Stack Web Development With MERN Stack & GenAI",
      "Java Backend Development with AI",
      "Data Science",
      "Career Skills in Data Analytics",
      "Python Bootcamp",
      "Terraform with Ansible",
      "AI for Beginners",
      "Cybersecurity Analyst Simulation",
      "JavaScript Project Course",
    ],
  },
  {
    title: "Experience",
    items: [
      "Full Stack Developer Intern - UNIHOX",
      "Freelance Developer - E-commerce & Tour Platforms (React + SpringBoot)",
      "AI Intern - Edunet Foundation (AICTE)",
    ],
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <Parallax bgImage={backgroundImage} strength={250}>
      <section className="about-section" id="about">
        <div className="about-overlay" />

        <div className="about-content">
          <header className="about-header" data-aos="fade-down">
            <h2 className="about-heading">About Me</h2>
            <p className="about-subheading">
              Building production-grade web and cloud solutions with AI-driven
              capabilities
            </p>
          </header>

          <div className="about-container">
            {/* IMAGE */}
            <div className="about-left" data-aos="fade-right">
              <div className="image-container">
                <img
                  src={myProfileImage}
                  alt="Sajal Laha"
                  className="about-profile-image-glow"
                  loading="lazy"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="about-right" data-aos="fade-left">
              {/* <p className="about-intro">
                Hi, I’m <span className="highlight">Sajal Laha</span>, a{" "}
                <span className="highlight">Full Stack Developer</span> with a
                strong interest in <span className="highlight">DevOps</span> and{" "}
                <span className="highlight">Cloud Engineering</span>.
              </p>

              <p className="about-details">
                I focus on building secure, scalable, and performance-driven
                applications using modern backend systems, cloud-native tools,
                and clean frontend architectures.
              </p> */}
              <p className="about-intro">
                Hi, I’m <span className="highlight">Sajal Laha</span>, a{" "}
                <span className="highlight">Full Stack Developer</span> working
                with <span className="highlight">React</span>,{" "}
                <span className="highlight">Spring Boot</span>, and{" "}
                <span className="highlight">Docker</span>, with hands-on
                experience in <span className="highlight">Microservices</span>,{" "}
                <span className="highlight">Kafka</span>,{" "}
                <span className="highlight">Redis</span>,{" "}
                <span className="highlight">AWS</span>, and{" "}
                <span className="highlight">AI/ML</span>.
              </p>

              <p className="about-details">
                I design and build scalable, event-driven backend systems and
                cloud-ready applications, leveraging microservice architectures,
                distributed messaging, caching strategies, and intelligent
                automation to deliver high-performance, reliable solutions.
              </p>

              <div className="about-cards">
                {ABOUT_SECTIONS.map((section) => (
                  <div className="about-card" key={section.title}>
                    <h4>{section.title}</h4>
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <a href="/resume.pdf" download className="resume-button">
                <FaDownload />
                <span>Download Resume</span>
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

// import { Parallax } from "react-parallax";
// // import { TypeAnimation } from "react-type-animation";

// import myProfileImage from "../assets/img/aboutimg.png";
// import backgroundImage from "../assets/img/contact1bg.jpg";
// import { FaDownload } from "react-icons/fa";

// const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <Parallax bgImage={backgroundImage} strength={300}>
//       <section className="about-section" id="about">
//         <div className="about-overlay"></div>
//         <div className="about-content">
//           <h2 className="about-heading" data-aos="fade-down">
//             About Me
//           </h2>

//           <div className="about-container">
//             {/* Image Section */}
//             <div className="about-left" data-aos="fade-right">
//               <div className="image-container">
//                 <img
//                   src={myProfileImage}
//                   alt="Sajal Laha"
//                   className="about-profile-image-glow"
//                 />
//               </div>
//             </div>

//             {/* Text Section */}
//             <div className="about-right" data-aos="fade-left">
//               <p className="about-intro">
//                 Hello! I'm <span className="highlight">Sajal Laha</span>, a
//                 dedicated{" "}
//                 <span className="highlight">Full Stack MERN Developer</span> and
//                 an aspiring <span className="highlight">DevOps Engineer</span>,
//                 currently studying{" "}
//                 <span className="highlight">Computer Science</span> at Cooch
//                 Behar Government Engineering College.
//               </p>

//               <p className="about-details">
//                 I'm passionate about building secure and scalable systems, and
//                 exploring technologies like{" "}
//                 <span className="highlight">Cloud Computing</span>,{" "}
//                 <span className="highlight">Web Development</span>, and{" "}
//                 <span className="highlight">Machine Learning</span>.
//               </p>

//               <div className="about-section-block">
//                 <p className="block-title">Internships:</p>
//                 <ul>
//                   <li>AI for Beginners – HP LIFE</li>
//                   <li>Cybersecurity Basics – IBM SkillsBuild</li>
//                   <li>Data Science – OPTIFYX TECHNOLOGY</li>
//                   <li>AICTE Internship – Edunet Foundation</li>
//                   <li>Machine Learning – Atharvo.pvt.ltd</li>
//                 </ul>
//               </div>

//               <div className="about-section-block">
//                 <p className="block-title">Certifications:</p>
//                 <ul>
//                   <li>Data Science</li>
//                   <li>Introduction to Career Skills in Data Analytics</li>
//                   <li>Python Bootcamp</li>
//                   <li>The Complete Terraform with Ansible Bootcamp</li>
//                   <li>AI for Beginners</li>
//                   <li>Cybersecurity Analyst Job Simulation</li>
//                   <li>JavaScript Project Course</li>
//                 </ul>
//               </div>

//               <div className="about-section-block">
//                 <p className="block-title">Work Experience:</p>
//                 <ul>
//                   <li>
//                     Freelance Developer - E-commerce Website, Tour Website
//                     (React + MongoDB + Node.js + Express.js)
//                   </li>
//                   <li>
//                     Artificial Intelligence Intern - Edunet Foundation (AICTE)
//                   </li>
//                 </ul>
//               </div>

//               <a href="/resume.pdf" download className="resume-button">
//                 <FaDownload style={{ marginRight: "8px" }} />
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Parallax>
//   );
// };

// export default About;

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
