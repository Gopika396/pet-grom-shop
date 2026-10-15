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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#bbNav" aria-label="Toggle navigation">
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
            <li className="nav-item ms-lg-2"><Link className="cart-nav" to="/cart"><i className="bi bi-bag"></i></Link></li>
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
        <div className="row g-4">
          <div className="col-lg-4">
            <Link className="navbar-brand bb-brand footer-brand" to="/">
              <img className="brand-logo" src={`${import.meta.env.BASE_URL}logo.png`} alt="Bark & Bubble logo" />
              <span>Bark <b>&</b> Bubble<small>HAPPY PETS CLUB</small></span>
            </Link>
            <p className="footer-copy mt-3">Big smiles, wagging tails, and fresh-from-the-salon fluff.</p>
          </div>
          <div className="col-6 col-lg-2"><h6>Explore</h6><Link to="/about">Our story</Link><Link to="/services">Services</Link><Link to="/products">Pet shop</Link></div>
          <div className="col-6 col-lg-2"><h6>Say hello</h6><Link to="/booking">Book a visit</Link><Link to="/contact">Contact us</Link><Link to="/cart">Your cart</Link></div>
          <div className="col-lg-4"><h6>Follow the happy</h6><p className="footer-copy">Fresh looks and fluffy moments.</p><div className="social-row"><a href="https://instagram.com"><i className="bi bi-instagram"></i></a><a href="https://facebook.com"><i className="bi bi-facebook"></i></a></div></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Bark & Bubble.</span><span>Kind hands. Happy paws.</span></div>
      </div>
    </footer>
  );
}

export default function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "Grooming question",
    message: "",
  });

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    const messages = JSON.parse(localStorage.getItem("bbMessages") || "[]");
    localStorage.setItem(
      "bbMessages",
      JSON.stringify([...messages, { ...form, createdAt: new Date().toISOString() }])
    );
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero page-hero-blue">
          <div className="container">
            <span className="eyebrow">LET'S CHAT</span>
            <h1>Questions? We've got<br /><span>ears for days.</span></h1>
            <p>Need help choosing a service or have a special request? We'd love to hear from you.</p>
            <div className="breadcrumb-line"><Link to="/">Home</Link><i className="bi bi-chevron-right"></i><span>Contact</span></div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <span className="eyebrow">THE HUMAN SIDE OF THE LEASH</span>
                <h2>Say hello to<br /><span>our friendly crew.</span></h2>
                <p className="body-copy">We're happy to help with grooming questions, appointment changes, and figuring out what your pet needs next.</p>

                <div className="contact-info-list">
                  <div><span className="contact-icon"><i className="bi bi-telephone"></i></span><div><strong>Give us a ring</strong><p>+91 98765 43210</p></div></div>
                  <div><span className="contact-icon"><i className="bi bi-envelope"></i></span><div><strong>Drop us a note</strong><p>hello@barkandbubble.example</p></div></div>
                  <div><span className="contact-icon"><i className="bi bi-geo-alt"></i></span><div><strong>Find our happy place</strong><p>12 Paws Lane, Your City, India</p></div></div>
                  <div><span className="contact-icon"><i className="bi bi-clock"></i></span><div><strong>Salon hours</strong><p>Tue–Sun · 9:00 AM–6:00 PM</p></div></div>
                </div>

                <div className="contact-photo">
                  <img src={getImg("contact.jpg")} alt="Happy dog at the salon" />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="form-card">
                  <h2>Send us a message</h2>
                  <p className="form-intro">We'll get back to you as soon as we can.</p>

                  {sent ? (
                    <div className="success-panel">
                      <i className="bi bi-check-circle-fill"></i>
                      <h3>Message saved!</h3>
                      <p>This demo saves your message in browser storage. It doesn't send an email to a real inbox.</p>
                      <button className="btn bb-btn bb-btn-navy" onClick={() => {
                        setSent(false);
                        setForm({ name: "", email: "", subject: "Grooming question", message: "" });
                      }}>
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form className="bb-form" onSubmit={submit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Your name *</label>
                          <input className="form-control" name="name" value={form.name} onChange={update} required placeholder="Your name" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email address *</label>
                          <input className="form-control" type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">What's this about?</label>
                          <select className="form-select" name="subject" value={form.subject} onChange={update}>
                            <option>Grooming question</option>
                            <option>Booking help</option>
                            <option>Product question</option>
                            <option>Feedback</option>
                            <option>Something else</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label className="form-label">Your message *</label>
                          <textarea className="form-control" name="message" rows="6" value={form.message} onChange={update} required placeholder="Tell us what's on your mind…"></textarea>
                        </div>
                        <div className="col-12">
                          <button className="btn bb-btn bb-btn-coral w-100" type="submit">
                            Send your message <i className="bi bi-arrow-up-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}