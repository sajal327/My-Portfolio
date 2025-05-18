import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
import headerImg from "../assets/img/mypic.png";
import backgroundImg from "../assets/img/bg.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { TypeAnimation } from "react-type-animation";
import {
  FaPlay,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";

export const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ParallaxProvider>
      <section
        className="banner"
        id="home"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="overlay" />
        <Container>
          <Row className="align-items-center justify-content-between">
            {/* Left Section */}
            <Col xs={12} md={6} xl={7}>
              <div data-aos="fade-up" className="left-section">
                <h2>Hi,</h2>
                <h1>I'm Sajal Laha</h1>
                <h2>
                  <span className="typing-animation">
                    <FaPlay className="play-icon" />
                    <TypeAnimation
                      sequence={[
                        "Full Stack Developer",
                        1500,
                        "MERN Stack Developer",
                        1500,
                        "React Developer",
                        1500,
                        "Backend Developer",
                        1500,
                        "Frontend Developer",
                        1500,
                        "AI/ML Enthusiast",
                        1500,
                        "DevOps Enthusiast",
                        1500,
                      ]}
                      speed={50}
                      repeat={Infinity}
                    />
                  </span>
                </h2>
                <button onClick={() => console.log("connect")}>
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
                <div className="social-icons">
                  <a
                    href="https://github.com/sajal327/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} color="#fff" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sajallaha/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} color="#fff" />
                  </a>
                  <a
                    href="https://www.facebook.com/sajal.laha.52/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={24} color="#fff" />
                  </a>
                  <a href="mailto:sajallaha16@gmail.com">
                    <FaEnvelope size={24} color="#fff" />
                  </a>
                </div>
              </div>
            </Col>

            {/* Right Section: Rotating Text + Image */}
            <Col xs={12} md={6} xl={5}>
              <Parallax speed={-10}>
                <div className="circle-text-wrapper" data-aos="zoom-in">
                  {/* Rotating SVG Text */}
                  <svg viewBox="0 0 300 300" className="svg-text">
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150
                           m -100, 0
                           a 100,100 0 1,1 200,0
                           a 100,100 0 1,1 -200,0"
                      />
                    </defs>
                    <text fill="#ffffff">
                      <textPath
                        xlinkHref="#circlePath"
                        startOffset="0"
                        textLength="600"
                      >
                        Mindset Separates The Best From The Rest.
                      </textPath>
                    </text>
                  </svg>

                  {/* Profile Image */}
                  <div className="profile-image-circle">
                    <img src={headerImg} alt="Profile" />
                  </div>
                </div>
              </Parallax>
            </Col>
          </Row>
        </Container>
      </section>
    </ParallaxProvider>
  );
};

// import { useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import headerImg from "../assets/img/mypic.png";
// import backgroundImg from "../assets/img/bg.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import { TypeAnimation } from "react-type-animation";
// import {
//   FaPlay,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaEnvelope,
// } from "react-icons/fa";

// export const Banner = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section
//       className="banner"
//       id="home"
//       style={{ backgroundImage: `url(${backgroundImg})` }}
//     >
//       <div className="overlay" />
//       <Container>
//         <Row className="align-items-center justify-content-between">
//           {/* Left Section */}
//           <Col xs={12} md={6} xl={7} data-aos="fade-right">
//             <div>
//               <h2>Hi,</h2>
//               <h1>I'm Sajal Laha</h1>
//               <h2>
//                 <span
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   <FaPlay style={{ color: "#9c0638", fontSize: "24px" }} />
//                   <TypeAnimation
//                     sequence={[
//                       "Full Stack Developer",
//                       1500,
//                       "MERN Stack Developer",
//                       1500,
//                       "React Developer",
//                       1500,
//                       "Backend Developer",
//                       1500,
//                       "Frontend Developer",
//                       1500,
//                       "Web Developer",
//                       1500,
//                     ]}
//                     speed={200}
//                     repeat={Infinity}
//                   />
//                 </span>
//               </h2>
//               <button onClick={() => console.log("connect")}>
//                 Let's Connect <ArrowRightCircle size={25} />
//               </button>
//               <div className="social-icons">
//                 <a
//                   href="https://github.com/your-username"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaGithub size={24} color="#fff" />
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaLinkedin size={24} color="#fff" />
//                 </a>
//                 <a
//                   href="https://facebook.com/your-profile"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebook size={24} color="#fff" />
//                 </a>
//                 <a href="mailto:your-email@example.com">
//                   <FaEnvelope size={24} color="#fff" />
//                 </a>
//               </div>
//             </div>
//           </Col>

//           {/* Right Section */}
//           <Col xs={12} md={6} xl={5} data-aos="fade-left">
//             <div className="circle-text-wrapper">
//               <svg viewBox="0 0 300 300" className="svg-text">
//                 <defs>
//                   <path
//                     id="circlePath"
//                     d="M 150, 150
//                        m -100, 0
//                        a 100,100 0 1,1 200,0
//                        a 100,100 0 1,1 -200,0"
//                   />
//                 </defs>
//                 <text fill="#ffffff">
//                   <textPath
//                     xlinkHref="#circlePath"
//                     startOffset="0"
//                     textLength="600"
//                   >
//                     MINDSET SEPARATES THE BEST FROM THE REST
//                   </textPath>
//                 </text>
//               </svg>
//               <div className="profile-image-circle">
//                 <img src={headerImg} alt="Profile" />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/mypic.png";
// import backgroundImg from "../assets/img/bg.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import TrackVisibility from "react-on-screen";
// import { TypeAnimation } from "react-type-animation";
// import "animate.css";
// import {
//   FaPlay,
//   FaGithub,
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

// export const Banner = () => {
//   return (
//     <section
//       className="banner"
//       id="home"
//       style={{ backgroundImage: `url(${backgroundImg})` }}
//     >
//       <div className="overlay" />
//       <Container>
//         <Row className="align-items-center justify-content-between">
//           {/* Left Section */}
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   {/* <div className="tagline">Welcome to my Portfolio</div> */}

//                   <div>
//                     <h2>Hi,</h2>
//                     <h1>I'm Sajal Laha</h1>
//                     <h2>
//                       <span
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "10px",
//                         }}
//                       >
//                         <FaPlay
//                           style={{ color: "#9c0638", fontSize: "24px" }}
//                         />
//                         <TypeAnimation
//                           sequence={[
//                             "Full Stack Developer",
//                             1500,
//                             "MERN Stack Developer",
//                             1500,
//                             "React Developer",
//                             1500,
//                             "Backend Developer",
//                             1500,
//                             "Frontend Developer",
//                             1500,
//                             "Web Developer",
//                             1500,
//                           ]}
//                           speed={200}
//                           repeat={Infinity}
//                         />
//                       </span>
//                     </h2>
//                   </div>

//                   <button onClick={() => console.log("connect")}>
//                     Let's Connect <ArrowRightCircle size={25} />
//                   </button>
//                   <span>
//                     <div className="social-icons">
//                       <a
//                         href="https://github.com/your-username"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaGithub size={24} color="#fff" />
//                       </a>
//                       <a
//                         href="https://linkedin.com/in/your-profile"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaLinkedin size={24} color="#fff" />
//                       </a>
//                       <a
//                         href="https://facebook.com/your-profile"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaFacebook size={24} color="#fff" />
//                       </a>
//                       {/* <a
//                         href="https://instagram.com/your-profile"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <FaInstagram size={24} color="#fff" />
//                       </a> */}
//                       <a href="mailto:your-email@example.com">
//                         <FaEnvelope size={24} color="#fff" />
//                       </a>
//                     </div>
//                   </span>
//                   {/* <p>
//                     I'm a Full Stack Web Developer with a passion for building
//                     beautiful and functional web applications.
//                   </p> */}
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>

//           {/* Right Section: Rotating Text + Image */}
//           <Col xs={12} md={6} xl={5}>
//             <div className="circle-text-wrapper">
//               {/* Rotating SVG Text */}
//               <svg viewBox="0 0 300 300" className="svg-text">
//                 <defs>
//                   <path
//                     id="circlePath"
//                     d="M 150, 150
//                        m -100, 0
//                        a 100,100 0 1,1 200,0
//                        a 100,100 0 1,1 -200,0"
//                   />
//                 </defs>
//                 <text fill="#ffffff">
//                   <textPath
//                     xlinkHref="#circlePath"
//                     startOffset="0"
//                     textLength="600"
//                   >
//                     MINDSET SEPARATES THE BEST FROM THE REST
//                   </textPath>
//                 </text>
//               </svg>

//               {/* Profile Image */}
//               <div className="profile-image-circle">
//                 <img src={headerImg} alt="Profile" />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/mypic.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = ["Web Developer", "Flutter Developer", "MERN Developer"];
//   const period = 1500;

//   useEffect(() => {
//     const ticker = setInterval(() => {
//       tick();
//     }, delta);
//     return () => clearInterval(ticker);
//   }, [text]);

//   const tick = () => {
//     const i = loopNum % toRotate.length;
//     const fullText = toRotate[i];
//     const updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta((prevDelta) => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex((prevIndex) => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === "") {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <section className="banner" id="home">
//       <div className="overlay" />
//       <Container>
//         <Row className="align-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h1>Hi,</h1>
//                   <h1>I'm Sajal Laha</h1>
//                   <h2>
//                     <span className="txt-rotate">
//                       <span className="wrap">{text}</span>
//                     </span>
//                   </h2>
//                   <p>
//                     I’m a passionate full-stack developer and ML enthusiast with
//                     experience in building responsive web apps and AI-powered
//                     solutions. Let's connect and innovate!
//                   </p>
//                   <button onClick={() => console.log("connect")}>
//                     Let’s Connect <ArrowRightCircle size={25} />
//                   </button>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={`rotating-text-wrapper ${
//                     isVisible ? "animate__animated animate__zoomIn" : ""
//                   }`}
//                 >
//                   <div className="rotating-text">
//                     Sajal Laha — Developer — Innovator — Coder —
//                   </div>
//                   <div className="profile-circle">
//                     <img src={headerImg} alt="Header Img" />
//                   </div>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/mypic.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState("");
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = ["Web Developer", "Flutter Developer", "MERN Developer"];
//   const period = 1500;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => {
//       clearInterval(ticker);
//     };
//   }, [text]);

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting
//       ? fullText.substring(0, text.length - 1)
//       : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta((prevDelta) => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex((prevIndex) => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === "") {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <section className="banner" id="home">
//       <Container>
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   {/* <span className="tagline">Welcome to my Portfolio</span> */}
//                   <div>
//                     <h1>Hi,</h1>
//                     <h1>I'm Sajal Laha</h1>
//                     <h2>
//                       <span
//                         className="txt-rotate"
//                         data-period="1000"
//                         data-rotate='[ "Web Developer", "Flutter Developer", "MERN Developer" ]'
//                       >
//                         <span className="wrap">{text}</span>
//                       </span>
//                     </h2>
//                   </div>

//                   <p>
//                     Lorem Ipsum is simply dummy text of the printing and
//                     typesetting industry. Lorem Ipsum has been the industry's
//                     standard dummy text ever since the 1500s, when an unknown
//                     printer took a galley of type and scrambled it to make a
//                     type specimen book.
//                   </p>
//                   <button onClick={() => console.log("connect")}>
//                     Let’s Connect <ArrowRightCircle size={25} />
//                   </button>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__zoomIn" : ""
//                   }
//                 >
//                   <img src={headerImg} alt="Header Img" />
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
