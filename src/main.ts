import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav class="nav-container">
      <img src="https://via.placeholder.com/120x40" alt="Logo" class="logo">
      <div class="nav-links">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">Our Portfolio</a>
        <a href="#" class="contact-btn">Contact us</a>
      </div>
    </nav>

    <section class="hero-section">
      <div class="accent-circle circle-1"></div>
      <div class="hero-content">
        <h1>
          The <span class="title-highlight">Home</span> of<br>
          <span class="title-highlight">Enterprise</span> 
          <span class="title-secondary">Business</span><br>
          Solutions
        </h1>
        <p class="hero-description">
          We are a software consulting firm that designs, develops, and 
          deploys custom software solutions for organizations that 
          want to make an impact through technology.
        </p>
        <a href="#" class="cta-button">Let's get started</a>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
             alt="Team working together">
      </div>
      <div class="accent-circle circle-2"></div>
    </section>

    <section class="what-we-do">
      <h2 class="section-title">What we <span class="title-highlight">do</span></h2>
      <p class="section-description">
        We build highly affordable custom software for companies large and 
        small. By applying modern design principles, in conjunction with the 
        latest cloud, mobile, and desktop technologies, we create tailored 
        solutions that drive business growth and efficiency.
      </p>
    </section>

    <section class="partners-section">
      <h2 class="partners-title">Meet our Partners</h2>
      <p class="partners-subtitle">We are Working With</p>
      <div class="partners-grid">
        <img src="https://via.placeholder.com/150x60" alt="EC-Council" class="partner-logo">
        <img src="https://via.placeholder.com/150x60" alt="Partner 2" class="partner-logo">
        <img src="https://via.placeholder.com/150x60" alt="NSSA" class="partner-logo">
        <img src="https://via.placeholder.com/150x60" alt="ActionAid" class="partner-logo">
        <img src="https://via.placeholder.com/150x60" alt="7Star ATS" class="partner-logo">
      </div>
    </section>

    <section class="hire-section">
      <div class="hire-content">
        <h2>Hire the best developers and designers around!</h2>
        <button class="hire-button">Hire Top Developers</button>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>About Us</h3>
          <p>Breakthough Technologies is committed to providing efficient, effective and quality services to our community and customers.</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Our Portfolio</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact Info</h3>
          <p>Mumbai: Shop 65 BTM Venture Park,<br>
             No. 235/36, Opp xx xxxxxx,<br>
             Mumbai.<br>
             Phone: +91 XXX XXX XXXX<br>
             Tel: XXX</p>
        </div>
        <div class="footer-section">
          <h3>Follow Us</h3>
          <div class="social-links">
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">LinkedIn</a>
            <a href="#" class="social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2024 Breakthrough Technologies. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);