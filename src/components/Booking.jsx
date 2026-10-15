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

export default function Booking() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    owner: "",
    email: "",
    phone: "",
    pet: "",
    type: "Bath & fluff",
    date: "",
    notes: "",
  });

  const update = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    const existing = JSON.parse(localStorage.getItem("bbBookings") || "[]");
    localStorage.setItem(
      "bbBookings",
      JSON.stringify([...existing, { ...form, createdAt: new Date().toISOString() }])
    );
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero page-hero-coral">
          <div className="container">
            <span className="eyebrow">LET'S MAKE A DATE</span>
            <h1>One happy visit,<br /><span>coming right up.</span></h1>
            <p>Tell us a little about your furry VIP and we'll be in touch to confirm a time that works.</p>
            <div className="breadcrumb-line"><Link to="/">Home</Link><i className="bi bi-chevron-right"></i><span>Booking</span></div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-7">
                <div className="form-card">
                  <h2>Book a grooming visit</h2>
                  <p className="form-intro">Fill this in and we'll contact you to confirm your appointment.</p>

                  {sent ? (
                    <div className="success-panel">
                      <i className="bi bi-check-circle-fill"></i>
                      <h3>You're on our list!</h3>
                      <p>Your booking request has been saved in this browser. This demo doesn't send it to a real salon.</p>
                      <button
                        className="btn bb-btn bb-btn-navy"
                        onClick={() => {
                          setSent(false);
                          setForm({ owner: "", email: "", phone: "", pet: "", type: "Bath & fluff", date: "", notes: "" });
                        }}
                      >
                        Make another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={submit} className="bb-form">
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Your name *</label>
                          <input className="form-control" name="owner" value={form.owner} onChange={update} required placeholder="Pet parent's name" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email address *</label>
                          <input className="form-control" type="email" name="email" value={form.email} onChange={update} required placeholder="you@example.com" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Phone number *</label>
                          <input className="form-control" type="tel" name="phone" value={form.phone} onChange={update} required placeholder="+91" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Pet's name *</label>
                          <input className="form-control" name="pet" value={form.pet} onChange={update} required placeholder="Who's getting pampered?" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Service *</label>
                          <select className="form-select" name="type" value={form.type} onChange={update}>
                            <option>Bath & fluff</option>
                            <option>Haircut party</option>
                            <option>Full glow-up</option>
                            <option>Pawdicure</option>
                            <option>Puppy intro</option>
                            <option>Freshen-up</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Preferred date</label>
                          <input className="form-control" type="date" name="date" min={new Date().toISOString().split("T")[0]} value={form.date} onChange={update} />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Anything we should know?</label>
                          <textarea className="form-control" rows="4" name="notes" value={form.notes} onChange={update} placeholder="Breed, size, coat needs, or anything that helps us make your pet comfy…"></textarea>
                        </div>
                        <div className="col-12">
                          <button className="btn bb-btn bb-btn-coral w-100" type="submit">
                            Send booking request <i className="bi bi-arrow-up-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              <div className="col-lg-5">
                <div className="booking-side">
                  <img src={getImg("booking.jpg")} alt="Happy dogs ready for grooming" />
                  <div className="booking-side-body">
                    <span className="eyebrow">BEFORE YOU VISIT</span>
                    <h3>A few little things.</h3>
                    <ul className="check-list">
                      <li><i className="bi bi-check-circle-fill"></i> Bring any coat or skin notes</li>
                      <li><i className="bi bi-check-circle-fill"></i> Let us know about nervousness</li>
                      <li><i className="bi bi-check-circle-fill"></i> We'll confirm the time with you</li>
                    </ul>
                    <p><i className="bi bi-telephone"></i> Questions? <Link to="/contact">Talk to our team</Link></p>
                  </div>
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