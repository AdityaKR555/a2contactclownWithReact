import React from "react";
import "./style.css";

function App() {
  return (
    <>
      <div className="main">
        <video autoPlay muted loop playsInline>
          <source src="/Assets/bgVideoWorld.mp4" type="video/mp4" />
        </video>

        <div className="navbar">
          <button className="demo-btn">
            Book A Demo <span className="arrow">▶</span>
          </button>
          <div style={{ fontSize: "16px" }}>
            <img className="top-icon" src="/Assets/call.png" alt="contact" />
            <span style={{ position: "relative", top: "-4px" }}>
              +91 83038 37930
            </span>
            <img className="top-icon" src="/Assets/email.png" alt="e-mail" />
            <span style={{ position: "relative", top: "-4px" }}>
              contactus@a2developers.org
            </span>
          </div>
        </div>
        <hr />

        <div className="pages">
          <div className="branding">
            <img
              src="/Assets/logo1.png"
              alt="logo"
              width="60px"
              height="60px"
            />
            <h2 style={{ fontSize: "48px", fontWeight: 370 }}>
              A2 Developers
            </h2>
          </div>
          <ul className="pages-list">
            <li>Home</li>
            <li>About Us</li>
            <li>Product</li>
            <li style={{ textDecoration: "underline" }}>Contact Us</li>
            <li>Services</li>
          </ul>
        </div>
        <h1 className="conhead">Contact us</h1>
      </div>

      <div className="midsection">
        <p style={{ fontSize: "36px", color: "#1E3A8A", fontWeight: "bold" }}>
          We're Always Ready
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#374151",
            marginLeft: "2px",
          }}
        >
          Get in touch with your Technology Partner.
        </p>

        <div className="container">
          <div className="formcontent">
            <form className="contact-form">
              <label htmlFor="name">Name *</label><br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              /><br />

              <label htmlFor="email">Email *</label><br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              /><br />

              <label htmlFor="contact">Contact Number *</label><br />
              <input
                type="tel"
                id="contact"
                name="contact"
                placeholder="Contact Number"
                required
              /><br />

              <label htmlFor="institution">Institution Name *</label><br />
              <input
                type="text"
                id="institution"
                name="institution"
                placeholder="Institution Name"
                required
              /><br />

              <label htmlFor="requirements">Requirements</label><br />
              <textarea
                id="requirements"
                name="requirements"
                placeholder="Requirements"
                rows="5"
                required
              ></textarea><br />

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="details">
            <div className="text-details">
              <p>
                <strong>Email:</strong> contactus@a2developers.org
              </p>
              <p>
                <strong>Contact Number:</strong> +91 83038 37930
              </p>
            </div>

            <div className="address">
              <div className="mapframe">
                <button className="add1">Gurugram</button>
                <button className="add2">Varanasi</button>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1551.4574177758143!2d77.10582831020135!3d28.479358972857828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ed43fffffff%3A0xad604325bcf7d4f1!2s232%2C%20Sikanderpur%2C%20Sector%2026%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1749549847966!5m2!1sen!2sin"
                width="100%"
                height="355"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="about">
          <div>
            <br />
            <h2 style={{ fontSize: "24px" }}>A2 Developers</h2>
            <br />
            <p style={{ fontSize: "14px" }}>
              A2 Developers is the premier agency directory, awards platform, and media hub connecting brands with top agencies in software, app development, design. We deliver vetted reviews, insights, and trends to drive business growth.
            </p>
            <br />
            <p style={{ fontSize: "12px" }}>© A2 Developers 2024 - 25, All Rights Reserved</p>
          </div>
          <div>
            <br />
            <h3 style={{ fontSize: "18px" }}>WHO WE ARE</h3>
            <br />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "5px" }}><a href="">Home</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Product</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Contact</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">About</a></li>
            </ul>
          </div>
          <div>
            <br />
            <h3 style={{ fontSize: "18px", marginLeft: "10px" }}>Modules</h3>
            <br />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "5px" }}><a href="">Student Management</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Fee Management</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Employee Management</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Certificate Management</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Transport Management</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Exam Management</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Report Management</a></li>
            </ul>
          </div>
          <div>
            <br />
            <h3 style={{ fontSize: "18px" }}>Our Services</h3>
            <br />
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "5px" }}><a href="">School ERP</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Email Services</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Website Design</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Digital Marketing</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Domain & Hosting</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Wordpress Development</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">E-commerce Development</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Android App Development</a></li>
              <li style={{ marginBottom: "5px" }}><a href="">Search Engine Optimization</a></li>
            </ul>
          </div>
          <div className="social">
            <br /><br />
            <a href="#" className="contact-btn">Get in Touch</a>

            {/* WhatsApp */}
            <div className="whatsapp">
              <img src="Assets/whatsapp.png" alt="WhatsApp" className="icon" />
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>

            {/* Social Media Links */}
            <div className="social-icons">
              <a href="#"><img src="Assets/linkedin.png" alt="LinkedIn" /></a>
              <a href="#"><img src="Assets/facebook.png" alt="Facebook" /></a>
              <a href="#"><img src="Assets/instagram.png" alt="Instagram" /></a>
              <a href="#"><img src="Assets/youtube.png" alt="YouTube" /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="last">
          <ul>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Cancellation and Refund Policy</li>
            <li>Shipping and Delivery Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
