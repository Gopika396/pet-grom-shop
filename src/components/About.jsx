import React from "react";
import getImg from "../utils/getImg.js";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bb-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand bb-brand" to="/">
          <img className="brand-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="Bark & Bubble logo" />
          <span>Bark <b>&</b> Bubble<small>HAPPY PETS CLUB</small></span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bbNav" aria-controls="bbNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="bbNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3"><Link className="btn bb-btn bb-btn-coral nav-cta" to="/booking">Book a groom <i className="bi bi-arrow-up-right"></i></Link></li>
            <li className="nav-item ms-lg-2"><Link className="cart-nav" to="/cart" aria-label="Cart"><i className="bi bi-bag"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bb-footer">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-lg-4">
            <Link className="navbar-brand bb-brand footer-brand" to="/">
              <img className="brand-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="Bark & Bubble logo" />
              <span>Bark <b>&</b> Bubble<small>HAPPY PETS CLUB</small></span>
            </Link>
            <p className="footer-copy mt-3">Big smiles, wagging tails, and fresh-from-the-salon fluff. Good grooming days start here.</p>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/about">Our story</Link><Link to="/services">Services</Link><Link to="/products">Pet shop</Link>
          </div>
          <div className="col-6 col-lg-2">
            <h6>Say hello</h6>
            <Link to="/booking">Book a visit</Link><Link to="/contact">Contact us</Link><Link to="/cart">Your cart</Link>
          </div>
          <div className="col-lg-4">
            <h6>Follow the happy</h6>
            <p className="footer-copy">Fresh looks and fluffy behind-the-scenes moments.</p>
            <div className="social-row">
              <a href="https://instagram.com" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="https://facebook.com" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://tiktok.com" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bark & Bubble. Made for the love of pets.</span>
          <span>Kind hands. Happy paws.</span>
        </div>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero page-hero-yellow">
          <div className="container">
            <span className="eyebrow">A LITTLE ABOUT US</span>
            <h1>Good people.<br /><span>Very good dogs.</span></h1>
            <p>We're a happy little grooming crew who believe every pet deserves gentle care, a little fun, and a whole lot of love.</p>
            <div className="breadcrumb-line"><Link to="/">Home</Link><i className="bi bi-chevron-right"></i><span>About</span></div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="about-image">
                  <img src={getImg("about.jpg")} alt="Happy golden dog" />
                  <span className="image-badge"><i className="bi bi-heart-fill"></i> Pets first. Always.</span>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <span className="eyebrow">OUR LITTLE BIG IDEA</span>
                <h2>Grooming with a<br /><span>whole lot of heart.</span></h2>
                <p className="body-copy">
                  Bark & Bubble started with one simple thought: grooming should
                  be a happy experience, not a stressful chore. We built a bright,
                  welcoming space where pets can settle in, get pampered, and
                  leave feeling like the stars they are.
                </p>
                <p className="body-copy">
                  Our team takes time to get to know every pet's personality,
                  comfort level, and needs. No rushing, no one-size-fits-all
                  approach—just thoughtful care and fresh looks.
                </p>
                <Link to="/services" className="btn bb-btn bb-btn-coral mt-2">
                  See what we do <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section section-pad">
          <div className="container">
            <div className="section-heading text-center">
              <span className="eyebrow">OUR PROMISE TO YOUR PET</span>
              <h2>Three things we <span>always bring.</span></h2>
            </div>

            <div className="row g-4 mt-3">
              <div className="col-md-4">
                <article className="value-card">
                  <div className="value-icon value-coral"><i className="bi bi-heart"></i></div>
                  <h3>Kindness first</h3>
                  <p>We listen to your pet's cues and treat every furry guest with patience and respect.</p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="value-card">
                  <div className="value-icon value-yellow"><i className="bi bi-stars"></i></div>
                  <h3>Little details matter</h3>
                  <p>From a comfy towel to a tidy finish, we care about every step of the visit.</p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="value-card">
                  <div className="value-icon value-blue"><i className="bi bi-emoji-smile"></i></div>
                  <h3>Happy is the goal</h3>
                  <p>We celebrate small wins and make room for breaks, cuddles, and tail wags.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <div className="cta-content">
              <div>
                <span className="eyebrow">COME SAY HI</span>
                <h2>There's room for <span>one more wag.</span></h2>
                <p>We'd love to meet your best friend.</p>
              </div>
              <Link to="/booking" className="btn bb-btn bb-btn-navy">
                Meet us at the salon <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}