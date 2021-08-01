import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to receive current health related news
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />

            <button className="footer--button">Subscribe</button>
          </form>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/Sign-up">How it works</Link>
            <Link to="/">Terms of Service</Link>
            <Link to="/">Privacy Policy</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/Contact">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Legal Notices</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Our Services</h2>
            <Link to="/Sign-up">Live Covid Tracker</Link>
            <Link to="/">Covid Guidelines</Link>
            <Link to="/">Current Health News</Link>
            <Link to="/">Find Hospital Services</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <small class="website-rights">
            © Copyright CovidEX. All Rights Reserved
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link class="social-icon-link youtube" to="/" aria-label="Youtube">
              <i class="fab fa-youtube" />
            </Link>
            <Link class="social-icon-link twitter" to="/" aria-label="Twitter">
              <i class="fab fa-twitter" />
            </Link>
            <Link class="social-icon-link twitter" to="/" aria-label="LinkedIn">
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
