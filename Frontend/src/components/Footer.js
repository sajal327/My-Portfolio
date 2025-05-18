// import { Container, Row, Col } from "react-bootstrap";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import { FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

// export const Footer = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <footer className="modern-footer">
//       <Container>
//         <Row className="align-items-center">
//           <Col
//             md={6}
//             className="text-center text-md-start mb-4 mb-md-0"
//             data-aos="fade-right"
//           >
//             <h3 className="footer-brand">Sajal Laha</h3>
//             <p className="footer-tagline">
//               Full Stack Developer & DevOps Engineer
//             </p>
//           </Col>
//           <Col md={6} className="text-center text-md-end" data-aos="fade-left">
//             <div className="footer-links">
//               <div className="icon-wrapper phone">
//                 <a href="tel:+919679159502" title="Phone">
//                   <FaPhoneAlt />
//                 </a>
//               </div>
//               <div className="icon-wrapper whatsapp">
//                 <a
//                   href="https://wa.me/919679159502"
//                   title="WhatsApp"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <FaWhatsapp />
//                 </a>
//               </div>
//               <div className="icon-wrapper github">
//                 <a
//                   href="https://github.com/sajallaha"
//                   title="GitHub"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <FaGithub />
//                 </a>
//               </div>
//               <div className="icon-wrapper linkedin">
//                 <a
//                   href="https://linkedin.com/in/sajallaha5"
//                   title="LinkedIn"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <FaLinkedin />
//                 </a>
//               </div>
//             </div>

//             <div className="footer-email mt-3">
//               <a
//                 href="mailto:sajallaha16@gmail.com"
//                 className="footer-email-link"
//               >
//                 sajallaha16@gmail.com
//               </a>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col className="text-center mt-4">
//             <p className="footer-copy">
//               © {new Date().getFullYear()} Sajal Laha. All Rights Reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="modern-footer">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-4 mb-md-0" data-aos="fade-right">
            <h3 className="footer-brand">Sajal Laha</h3>
            <p className="footer-tagline">
              Full Stack Developer & DevOps Engineer
            </p>
          </Col>
          <Col md={6} className="text-end" data-aos="fade-left">
            <div className="footer-links">
              <div className="icon-wrapper phone">
                <a href="tel:+919679159502" title="Phone">
                  <FaPhoneAlt />
                </a>
              </div>
              <div className="icon-wrapper whatsapp">
                <a
                  href="https://wa.me/919679159502"
                  title="WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <div className="icon-wrapper github">
                <a
                  href="https://github.com/sajallaha"
                  title="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="icon-wrapper linkedin">
                <a
                  href="https://linkedin.com/in/sajallaha5"
                  title="LinkedIn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="footer-email mt-3 text-end">
              <a
                href="mailto:sajallaha16@gmail.com"
                className="footer-email-link"
              >
                sajallaha16@gmail.com
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-copy">
              © {new Date().getFullYear()} Sajal Laha. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
