import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bb-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand bb-brand" to="/">
          <span className="brand-mark"><i className="bi bi-patch-check-fill"></i></span>
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
              <span className="brand-mark"><i className="bi bi-patch-check-fill"></i></span>
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
            <div className="social-row"><a href="https://instagram.com" aria-label="Instagram"><i className="bi bi-instagram"></i></a><a href="https://facebook.com" aria-label="Facebook"><i className="bi bi-facebook"></i></a><a href="https://tiktok.com" aria-label="TikTok"><i className="bi bi-tiktok"></i></a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Bark & Bubble. Made for the love of pets.</span><span>Kind hands. Happy paws.</span></div>
      </div>
    </footer>
  );
}

const serviceList = [
  { icon: "bi-droplet-half", name: "Bath & fluff", price: "from ₹699", time: "45–60 min", color: "blue", desc: "A warm bath, gentle shampoo, blow-dry, brush-out, and a fresh, fluffy finish." },
  { icon: "bi-scissors", name: "Haircut party", price: "from ₹999", time: "60–90 min", color: "coral", desc: "A breed-aware or style-inspired trim with face, feet, and hygiene tidy-up." },
  { icon: "bi-stars", name: "Full glow-up", price: "from ₹1,499", time: "90–120 min", color: "yellow", desc: "Our complete grooming experience: bath, dry, haircut, ear cleaning, and finishing spritz." },
  { icon: "bi-hand-index-thumb", name: "Pawdicure", price: "from ₹399", time: "20–30 min", color: "blue", desc: "Nail trim, paw-pad tidy, and a little balm to keep those paws feeling lovely." },
  { icon: "bi-emoji-smile", name: "Puppy intro", price: "from ₹599", time: "30–45 min", color: "yellow", desc: "A gentle first visit with a mini wash, brushing, and positive introductions." },
  { icon: "bi-heart-pulse", name: "Freshen-up", price: "from ₹499", time: "25–35 min", color: "coral", desc: "A quick tidy between full grooms: brush, face clean, sanitary trim, and spritz." }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero page-hero-blue"><div className="container"><span className="eyebrow">THE GLOW-UP MENU</span><h1>Pick your pet's<br /><span>happy treatment.</span></h1><p>From a quick freshen-up to the full celebrity treatment, we've got a little something for every coat and character.</p><div className="breadcrumb-line"><Link to="/">Home</Link><i className="bi bi-chevron-right"></i><span>Services</span></div></div></section>
        <section className="section-pad"><div className="container"><div className="row g-4">{serviceList.map((s, i) => <div className="col-md-6 col-lg-4" key={s.name} data-aos="fade-up" data-aos-delay={(i % 3) * 80}><article className={`service-detail-card detail-${s.color}`}><div className="service-detail-top"><span className="service-icon"><i className={`bi ${s.icon}`}></i></span><span className="service-time"><i className="bi bi-clock"></i> {s.time}</span></div><h3>{s.name}</h3><p>{s.desc}</p><div className="service-price-row"><strong>{s.price}</strong><Link to="/booking" className="circle-arrow" aria-label={`Book ${s.name}`}><i className="bi bi-arrow-up-right"></i></Link></div></article></div>)}</div><p className="pricing-note mt-4"><i className="bi bi-info-circle"></i> Prices are starting estimates and may vary by breed, coat condition, and size. We'll confirm before your appointment.</p></div></section>
        <section className="split-feature"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6"><span className="eyebrow">NOT SURE WHAT TO PICK?</span><h2>We'll help you find<br /><span>the right fit.</span></h2><p className="body-copy">Tell us about your pet, their coat, and what they enjoy. We'll recommend a comfortable grooming plan—no pressure, just good advice.</p><Link to="/contact" className="btn bb-btn bb-btn-coral">Ask our team <i className="bi bi-arrow-up-right"></i></Link></div><div className="col-lg-6"><div className="feature-image"><img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85" alt="Dog enjoying a grooming session" /><div className="feature-note"><i className="bi bi-chat-heart-fill"></i><span>Real advice.<br />Tailored care.</span></div></div></div></div></div></section>
      </main>
      <Footer />
    </>
  );
}