// import React from "react";
// import { Container } from "react-bootstrap";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "20px 0",
    marginTop: "auto",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const contentStyle = {
    flex: 1, 
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
      </div>

      <footer style={footerStyle}>
        <Container>
          <Row className="text-center text-md-start">
            <Col md={3} className="mb-3">
              <h5 className="fw-bold">E-Commerce</h5>
              <p>Discover the best deals and latest trends at unbeatable prices.</p>
            </Col>

            <Col md={3} className="mb-3">
              <h5 className="fw-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
                <li><Link to="/shop" className="text-light text-decoration-none">Shop</Link></li>
                <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
                <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              </ul>
            </Col>

            <Col md={3} className="mb-3">
              <h5 className="fw-bold">Customer Service</h5>
              <ul className="list-unstyled">
                <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
                <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
                <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
              </ul>
            </Col>

            <Col md={3} className="mb-3">
              <h5 className="fw-bold">Follow Us</h5>
              <div className="d-flex gap-3">
                <a href="https://facebook.com" className="text-light fs-4"><FaFacebook /></a>
                <a href="https://twitter.com" className="text-light fs-4"><FaTwitter /></a>
                <a href="https://instagram.com" className="text-light fs-4"><FaInstagram /></a>
                <a href="https://linkedin.com" className="text-light fs-4"><FaLinkedin /></a>
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col className="text-center">
              <p className="mb-0">&copy; {new Date().getFullYear()} E-Commercia. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//    
//     <footer className="bg-dark text-light py-4 mt-5">
//       <Container>
//         <Row className="text-center text-md-start">
//           {/* Company Info */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">E-Commerce</h5>
//             <p>Discover the best deals and latest trends at unbeatable prices.</p>
//           </Col>

//           {/* Quick Links */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
//               <li><Link to="/shop" className="text-light text-decoration-none">Shop</Link></li>
//               <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
//               <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
//             </ul>
//           </Col>

//           {/* Customer Service */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">Customer Service</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
//               <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
//               <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
//               <li><Link to="/terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
//             </ul>
//           </Col>

//           {/* Social Media */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">Follow Us</h5>
//             <div className="d-flex gap-3">
//               <a href="https://facebook.com" className="text-light fs-4"><FaFacebook /></a>
//               <a href="https://twitter.com" className="text-light fs-4"><FaTwitter /></a>
//               <a href="https://instagram.com" className="text-light fs-4"><FaInstagram /></a>
//               <a href="https://linkedin.com" className="text-light fs-4"><FaLinkedin /></a>
//             </div>
//           </Col>
//         </Row>

//         {/* Copyright Section */}
//         <Row className="mt-3">
//           <Col className="text-center">
//             <p className="mb-0">&copy; {new Date().getFullYear()} E-Commercia. All Rights Reserved.</p>
//           </Col>
//         </Row>
//       </Container>
      
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-4 mt-5" style={{ position: "relative", bottom: 0, width: "100%" }}>
//       <Container>
//         <Row className="text-center text-md-start">
//           {/* Company Info */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">E-Commerce</h5>
//             <p>Discover the best deals and latest trends at unbeatable prices.</p>
//           </Col>

//           {/* Quick Links */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
//               <li><Link to="/shop" className="text-light text-decoration-none">Shop</Link></li>
//               <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
//               <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
//             </ul>
//           </Col>

//           {/* Customer Service */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">Customer Service</h5>
//             <ul className="list-unstyled">
//               <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
//               <li><Link to="/shipping" className="text-light text-decoration-none">Shipping Info</Link></li>
//               <li><Link to="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
//               <li><Link to="/terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
//             </ul>
//           </Col>

//           {/* Social Media */}
//           <Col md={3} className="mb-3">
//             <h5 className="fw-bold">Follow Us</h5>
//             <div className="d-flex gap-3">
//               <a href="https://facebook.com" className="text-light fs-4" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//               <a href="https://twitter.com" className="text-light fs-4" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//               <a href="https://instagram.com" className="text-light fs-4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//               <a href="https://linkedin.com" className="text-light fs-4" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//             </div>
//           </Col>
//         </Row>

//         {/* Copyright Section */}
//         <Row className="mt-3">
//           <Col className="text-center">
//             <p className="mb-0">&copy; {new Date().getFullYear()} E-Commerce. All Rights Reserved.</p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;
