// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// export const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <Navbar
//       expand="md"
//       fixed="top"
//       className={scrolled ? "navbar scrolled" : "navbar"}
//       expanded={expanded}
//     >
//       <Container>
//         <Navbar.Brand href="/">Sajal</Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => setExpanded(!expanded)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto mx-auto navbar-nav">
//             <Nav.Link href="#home" className="navbar-link">
//               Home
//             </Nav.Link>
//             <Nav.Link href="#about" className="navbar-link">
//               About
//             </Nav.Link>
//             <Nav.Link href="#skills" className="navbar-link">
//               Skills
//             </Nav.Link>
//             <Nav.Link href="#projects" className="navbar-link">
//               Projects
//             </Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a
//                 href="https://linkedin.com/in/sajallaha5"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaLinkedin />
//               </a>
//               <a
//                 href="https://github.com/sajallaha"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaGithub />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer">
//                 <FaInstagram />
//               </a>
//             </div>
//             <button className="vvd" onClick={() => console.log("connect")}>
//               <span>Let’s Connect</span>
//             </button>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import linkedin from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import gitHub from "../assets/img/github1.png";
import mail from "../assets/img/mail.png";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="md"
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {["home", "about", "skills", "projects"].map((section) => (
              <Nav.Link
                key={section}
                href={`#${section}`}
                className={`navbar-link ${
                  activeLink === section ? "active" : ""
                }`}
                onClick={() => onUpdateActiveLink(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/sajallaha/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="linkedin" />
              </a>
              <a
                href="https://github.com/sajal327/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHub} alt="GitHub" className="github" />
              </a>
              <a href="mailto:sajallaha16@gmail.com">
                <img src={mail} alt="Email" className="mail" />
              </a>
            </div>
            <HashLink to="#connect">
              <button className="vvd">
                <span>Let's Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { HashLink } from "react-router-hash-link";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Navbar
//       expand="md"
//       className={`navbar ${scrolled ? "scrolled" : ""}`}
//       collapseOnSelect
//     >
//       <Container>
//         <Navbar.Brand href="/">
//           {/* You can uncomment and add logo here */}
//           {/* <img src={logo} alt="Logo" /> */}
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link
//               as={HashLink}
//               smooth
//               to="#home"
//               className={
//                 activeLink === "home" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("home")}
//             >
//               Home
//             </Nav.Link>
//             <Nav.Link
//               as={HashLink}
//               smooth
//               to="#about"
//               className={
//                 activeLink === "about" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("about")}
//             >
//               About
//             </Nav.Link>
//             <Nav.Link
//               as={HashLink}
//               smooth
//               to="#skills"
//               className={
//                 activeLink === "skills" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               as={HashLink}
//               smooth
//               to="#projects"
//               className={
//                 activeLink === "projects" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("projects")}
//             >
//               Projects
//             </Nav.Link>
//           </Nav>
//           <span className="navbar-text">
//             <div className="social-icon">
//               <a href="#">
//                 <img src={navIcon1} alt="icon1" />
//               </a>
//               <a href="#">
//                 <img src={navIcon2} alt="icon2" />
//               </a>
//               <a href="#">
//                 <img src={navIcon3} alt="icon3" />
//               </a>
//             </div>
//             <HashLink smooth to="#connect">
//               <button className="vvd">
//                 <span>Let's Connect</span>
//               </button>
//             </HashLink>
//           </span>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// import { useState, useEffect } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// import { HashLink } from "react-router-hash-link";
// import { BrowserRouter as Router } from "react-router-dom";

// export const NavBar = () => {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="/">
//             {/* <img src={logo} alt="Logo" /> */}
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 href="#home"
//                 className={
//                   activeLink === "home" ? "active navbar-link" : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("home")}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 href="#about"
//                 className={
//                   activeLink === "about" ? "active navbar-link" : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("about")}
//               >
//                 About
//               </Nav.Link>
//               <Nav.Link
//                 href="#skills"
//                 className={
//                   activeLink === "skills" ? "active navbar-link" : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("skills")}
//               >
//                 Skills
//               </Nav.Link>
//               <Nav.Link
//                 href="#projects"
//                 className={
//                   activeLink === "projects"
//                     ? "active navbar-link"
//                     : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("projects")}
//               >
//                 Projects
//               </Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="#">
//                   <img src={navIcon1} alt="" />
//                 </a>
//                 <a href="#">
//                   <img src={navIcon2} alt="" />
//                 </a>
//                 <a href="#">
//                   <img src={navIcon3} alt="" />
//                 </a>
//               </div>
//               <HashLink to="#connect">
//                 <button className="vvd">
//                   <span>Let's Connect</span>
//                 </button>
//               </HashLink>
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   );
// };
