import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import contactBg from "../assets/img/contactbg.jpg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      let result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Failed to connect to the server.",
      });
      console.error("Fetch error:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");

  //   try {
  //     let response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formDetails),
  //     });

  //     let result = await response.json();
  //     setButtonText("Send");
  //     setFormDetails(formInitialDetails);

  //     if (result.code === 200) {
  //       setStatus({ success: true, message: "Message sent successfully" });
  //     } else {
  //       setStatus({
  //         success: false,
  //         message: "Something went wrong, please try again later.",
  //       });
  //     }
  //   } catch (error) {
  //     setButtonText("Send");
  //     setStatus({
  //       success: false,
  //       message: "Failed to connect to the server.",
  //     });
  //     console.error("Fetch error:", error);
  //   }
  // };

  return (
    <section
      className="contact-section"
      id="connect"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <div className="overlay" />
      <Container>
        <Row className="justify-content-center">
          <Col md={8} data-aos="fade-up">
            <div className="contact-form-wrapper">
              <h2 className="contact-title mb-4">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="glass-form">
                <Row className="g-3">
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={formDetails.firstName}
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={formDetails.lastName}
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formDetails.email}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={6}>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={formDetails.phone}
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={12}>
                    <textarea
                      rows="5"
                      placeholder="Your Message"
                      value={formDetails.message}
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                      required
                    />
                  </Col>
                  <Col sm={12} className="text-center">
                    <button type="submit" className="submit-btn">
                      {buttonText}
                    </button>
                  </Col>
                  {status.message && (
                    <Col sm={12}>
                      <p
                        className={
                          status.success ? "text-success" : "text-danger"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import contactBg from "../assets/img/contactbg.jpg"; // make sure this file exists

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };

//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code === 200) {
//       setStatus({ success: true, message: "Message sent successfully" });
//     } else {
//       setStatus({
//         success: false,
//         message: "Something went wrong, please try again later.",
//       });
//     }
//   };

//   return (
//     <section
//       className="contact-section"
//       id="connect"
//       style={{
//         backgroundImage: `url(${contactBg})`,
//       }}
//     >
//       <div className="overlay" />
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={`contact-form-wrapper ${
//                     isVisible ? "animate__fadeInUp" : ""
//                   }`}
//                 >
//                   <h2 className="contact-title mb-4">Get in Touch</h2>
//                   <form onSubmit={handleSubmit} className="glass-form">
//                     <Row className="g-3">
//                       <Col sm={6}>
//                         <input
//                           type="text"
//                           placeholder="First Name"
//                           value={formDetails.firstName}
//                           onChange={(e) =>
//                             onFormUpdate("firstName", e.target.value)
//                           }
//                           required
//                         />
//                       </Col>
//                       <Col sm={6}>
//                         <input
//                           type="text"
//                           placeholder="Last Name"
//                           value={formDetails.lastName}
//                           onChange={(e) =>
//                             onFormUpdate("lastName", e.target.value)
//                           }
//                           required
//                         />
//                       </Col>
//                       <Col sm={6}>
//                         <input
//                           type="email"
//                           placeholder="Email"
//                           value={formDetails.email}
//                           onChange={(e) =>
//                             onFormUpdate("email", e.target.value)
//                           }
//                           required
//                         />
//                       </Col>
//                       <Col sm={6}>
//                         <input
//                           type="tel"
//                           placeholder="Phone Number"
//                           value={formDetails.phone}
//                           onChange={(e) =>
//                             onFormUpdate("phone", e.target.value)
//                           }
//                           required
//                         />
//                       </Col>
//                       <Col sm={12}>
//                         <textarea
//                           rows="5"
//                           placeholder="Your Message"
//                           value={formDetails.message}
//                           onChange={(e) =>
//                             onFormUpdate("message", e.target.value)
//                           }
//                           required
//                         />
//                       </Col>
//                       <Col sm={12} className="text-center">
//                         <button type="submit" className="submit-btn">
//                           {buttonText}
//                         </button>
//                       </Col>
//                       {status.message && (
//                         <Col sm={12}>
//                           <p
//                             className={
//                               status.success ? "text-success" : "text-danger"
//                             }
//                           >
//                             {status.message}
//                           </p>
//                         </Col>
//                       )}
//                     </Row>
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "animate.css";
// import TrackVisibility from "react-on-screen";
// import backgroundImg from "../assets/img/bg.jpg";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({ ...formDetails, [category]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json;charset=utf-8" },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code === 200) {
//       setStatus({ success: true, message: "Message sent successfully" });
//     } else {
//       setStatus({
//         success: false,
//         message: "Something went wrong, please try again later.",
//       });
//     }
//   };

//   return (
//     <section
//       className="contact-section"
//       id="connect"
//       style={{ backgroundImage: `url(${backgroundImg})` }}
//     >
//       <div className="contact-bg" />
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={`contact-box ${
//                     isVisible ? "animate__animated animate__fadeInUp" : ""
//                   }`}
//                 >
//                   <h2 className="contact-title">Get in touch</h2>
//                   <form onSubmit={handleSubmit} className="contact-form">
//                     <div className="input-row">
//                       <input
//                         type="text"
//                         value={formDetails.firstName}
//                         placeholder="Your name"
//                         onChange={(e) =>
//                           onFormUpdate("firstName", e.target.value)
//                         }
//                       />
//                       <input
//                         type="email"
//                         value={formDetails.email}
//                         placeholder="Your mail"
//                         onChange={(e) => onFormUpdate("email", e.target.value)}
//                       />
//                     </div>
//                     <textarea
//                       rows="6"
//                       value={formDetails.message}
//                       placeholder="Your message"
//                       onChange={(e) => onFormUpdate("message", e.target.value)}
//                     ></textarea>
//                     <button type="submit">{buttonText}</button>
//                     {status.message && (
//                       <p className={status.success ? "success" : "danger"}>
//                         {status.message}
//                       </p>
//                     )}
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     let response = await fetch("http://localhost:5000/contact", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json;charset=utf-8",
//       },
//       body: JSON.stringify(formDetails),
//     });
//     setButtonText("Send");
//     let result = await response.json();
//     setFormDetails(formInitialDetails);
//     if (result.code == 200) {
//       setStatus({ succes: true, message: "Message sent successfully" });
//     } else {
//       setStatus({
//         succes: false,
//         message: "Something went wrong, please try again later.",
//       });
//     }
//   };

//   return (
//     <section className="contact" id="connect">
//       <Container>
//         <Row className="align-items-center">
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <img
//                   className={
//                     isVisible ? "animate__animated animate__zoomIn" : ""
//                   }
//                   src={contactImg}
//                   alt="Contact Us"
//                 />
//               )}
//             </TrackVisibility>
//           </Col>
//           <Col size={12} md={6}>
//             <TrackVisibility>
//               {({ isVisible }) => (
//                 <div
//                   className={
//                     isVisible ? "animate__animated animate__fadeIn" : ""
//                   }
//                 >
//                   <h2>Get In Touch</h2>
//                   <form onSubmit={handleSubmit}>
//                     <Row>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.firstName}
//                           placeholder="First Name"
//                           onChange={(e) =>
//                             onFormUpdate("firstName", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="text"
//                           value={formDetails.lasttName}
//                           placeholder="Last Name"
//                           onChange={(e) =>
//                             onFormUpdate("lastName", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="email"
//                           value={formDetails.email}
//                           placeholder="Email Address"
//                           onChange={(e) =>
//                             onFormUpdate("email", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} sm={6} className="px-1">
//                         <input
//                           type="tel"
//                           value={formDetails.phone}
//                           placeholder="Phone No."
//                           onChange={(e) =>
//                             onFormUpdate("phone", e.target.value)
//                           }
//                         />
//                       </Col>
//                       <Col size={12} className="px-1">
//                         <textarea
//                           rows="6"
//                           value={formDetails.message}
//                           placeholder="Message"
//                           onChange={(e) =>
//                             onFormUpdate("message", e.target.value)
//                           }
//                         ></textarea>
//                         <button type="submit">
//                           <span>{buttonText}</span>
//                         </button>
//                       </Col>
//                       {status.message && (
//                         <Col>
//                           <p
//                             className={
//                               status.success === false ? "danger" : "success"
//                             }
//                           >
//                             {status.message}
//                           </p>
//                         </Col>
//                       )}
//                     </Row>
//                   </form>
//                 </div>
//               )}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };
