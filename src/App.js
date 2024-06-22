import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Card1 from "./Assets/Card1.png";
import Card2 from "./Assets/Card2.png";
import Card3 from "./Assets/Card3.png";
import Card4 from "./Assets/Card4.png";
import Card5 from "./Assets/Card5.png";
import Card6 from "./Assets/Card6.png";
import Card7 from "./Assets/Card7.png";
import Casual from "./Assets/casual.jpg";
import homeVideo from "./Assets/home.mp4"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <FullScreenVideo />
      <ScrollCards />
      <FullScreenImage />
      <ContactUs />
      <Footer />
    </div>
  );
};

const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
    className="navbar"
  >
    <div className="logo">MEOL</div>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Collection</li>
      <li>Contact</li>
    </ul>
  </motion.nav>
);

const FullScreenVideo = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="fullscreen-video"
  >
    <video src={homeVideo} autoPlay loop muted />
    <div className="branding-elements">
      <h1>MEOL</h1>
      <p>Style Redefined</p>
      <motion.button
        className="explore-now-button"
        whileHover={{ scale: 1.1 }}
      >
        Explore Now
      </motion.button>
    </div>
  </motion.section>
);

const ScrollCards = () => {
  const images = [Card1, Card2, Card3, Card4, Card5, Card6, Card7];
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <motion.section className="scroll-cards">
      <h2 style={{ marginBottom: "2rem" }}>MEOL Recents</h2>
      <button className="scroll-button left" onClick={scrollLeft}>
        <motion.div whileHover={{ scale: 1.2 }}>{"<"}</motion.div>
      </button>
      <div className="cards-container" ref={scrollRef}>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            // transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={image} alt={`Card ${index}`} />
            <div className="card-content">
              <h2>Card Title {index + 1}</h2>
              <p>Card description goes here...</p>
              <motion.button
                className="buy-now-button"
                whileHover={{ scale: 1.1 }}
              >
                Buy Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        <motion.div whileHover={{ scale: 1.2 }}>{">"}</motion.div>
      </button>
    </motion.section>
  );
};


const FullScreenImage = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="fullscreen-image"
  >
    <img src={Casual} alt="Full Screen" />
    <div className="branding-elements">
      <h1>MEOL</h1>
      <p>Chill in Style</p>
      <motion.button
        className="explore-now-button"
        whileHover={{ scale: 1.1 }}
      >
        Explore Now
      </motion.button>
    </div>
  </motion.section>
);

const ContactUs = () => (
  <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="contact-us"
  >
    <h2>Contact Us</h2>
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" required />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea rows="4" required></textarea>
      </div>
      <motion.button
        type="submit"
        className="submit-button"
        whileHover={{ scale: 1.1 }}
      >
        Send Message
      </motion.button>
    </form>
  </motion.section>
);

const Footer = () => (
  <footer className="footer">
    <div className="footer-section">
      <h4>CLIENT SERVICES</h4>
      <ul>
        <li>Contact Us</li>
        <li>Book an Appointment</li>
        <li>FAQs</li>
        <li>Orders and Shipping</li>
        <li>Returns and Refunds</li>
        <li>Track your order</li>
        <li>Return Form</li>
        <li>Login to your account</li>
        <li>Fendi Services</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>CORPORATE</h4>
      <ul>
        <li>Store Locator</li>
        <li>Careers</li>
        <li>Sustainability</li>
        <li>Accessibility</li>
        <li>Fendi Casa</li>
        <li>Site map</li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>LEGAL & PRIVACY</h4>
      <ul>
        <li>Privacy Policies</li>
        <li>Cookie Policy</li>
        <li>Responsible disclosure policy</li>
        <li>Terms and conditions of sale</li>
        <li>Website terms of use</li>
        <li>Code of conduct</li>
        <li>Compliance</li>
        <li>Model 231, Supervisory Body and Whistleblowing</li>
      </ul>
    </div>
  </footer>
);

export default App;
