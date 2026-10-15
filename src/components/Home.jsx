import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bb-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand bb-brand" to="/">
          <img className="brand-logo" src="/logo.png" alt="Bark & Bubble logo" />
          <span>
            Bark <b>&</b> Bubble
            <small>HAPPY PETS CLUB</small>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#bbNav"
          aria-controls="bbNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="bbNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Shop</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item ms-lg-3">
              <Link className="btn bb-btn bb-btn-coral nav-cta" to="/booking">
                Book a groom <i className="bi bi-arrow-up-right"></i>
              </Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="cart-nav" to="/cart" aria-label="Cart">
                <i className="bi bi-bag"></i>
              </Link>
            </li>
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
              <img className="brand-logo" src="/logo.png" alt="Bark & Bubble logo" />
              <span>
                Bark <b>&</b> Bubble
                <small>HAPPY PETS CLUB</small>
              </span>
            </Link>
            <p className="footer-copy mt-3">
              Big smiles, wagging tails, and fresh-from-the-salon fluff.
              Good grooming days start here.
            </p>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/about">Our story</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Pet shop</Link>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Say hello</h6>
            <Link to="/booking">Book a visit</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/cart">Your cart</Link>
          </div>

          <div className="col-lg-4">
            <h6>Follow the happy</h6>
            <p className="footer-copy">
              Fresh looks and fluffy behind-the-scenes moments.
            </p>
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

const services = [
  {
    icon: "bi-droplet-half",
    title: "Bath & fluff",
    desc: "A fresh, gentle wash and the fluffiest finish.",
    color: "blue",
  },
  {
    icon: "bi-scissors",
    title: "Haircut party",
    desc: "A comfy trim shaped around your pet's style.",
    color: "coral",
  },
  {
    icon: "bi-heart-pulse",
    title: "Pawdicure",
    desc: "Nail care, paw balm, and lots of praise.",
    color: "yellow",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bb-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-up">
                <span className="eyebrow">
                  <span className="eyebrow-dot"></span>
                  YOUR PET'S HAPPY PLACE
                </span>

                <h1>
                  Good hair days.
                  <br />
                  <span>Great tail wags.</span>
                </h1>

                <p className="hero-copy">
                  Feel-good grooming for the four-legged VIPs in your life.
                  Kind hands, cute cuts, and plenty of happy wiggles.
                </p>

                <div className="hero-actions">
                  <Link to="/booking" className="btn bb-btn bb-btn-coral">
                    Book a happy visit <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <Link to="/services" className="text-link">
                    Explore services <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>

                <div className="hero-proof">
                  <div className="avatar-stack">
                    <span>🐶</span><span>🐕</span><span>🐩</span>
                  </div>
                  <div>
                    <strong>1,200+ happy pets</strong>
                    <small>and their very happy humans</small>
                  </div>
                  <div className="proof-stars">★★★★★</div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
                <div className="hero-art">
                  <div className="hero-photo-wrap">
                    <img className="hero-photo" src="/images/hero.jpg" alt="Freshly groomed fluffy dog" />
                  </div>
                  <div className="hero-sticker sticker-yellow">
                    <i className="bi bi-stars"></i>
                    <span>Fresh<br />& fabulous</span>
                  </div>
                  <div className="hero-sticker sticker-blue">
                    <i className="bi bi-heart-fill"></i>
                    <span>Lots of<br />love inside</span>
                  </div>
                  <div className="hero-sparkle sparkle-one">✦</div>
                  <div className="hero-sparkle sparkle-two">✳</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ticker-strip">
          <div className="ticker-inner">
            <span>GOOD DOG ENERGY</span>
            <i className="bi bi-stars"></i>
            <span>GENTLE GROOMING</span>
            <i className="bi bi-heart-fill"></i>
            <span>HAPPY PAWS ONLY</span>
            <i className="bi bi-stars"></i>
            <span>GOOD DOG ENERGY</span>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="section-heading text-center" data-aos="fade-up">
              <span className="eyebrow">THE GLOW-UP MENU</span>
              <h2>Little pamper. <span>Big happy.</span></h2>
              <p>
                Everything your best friend needs to look fresh, feel comfy,
                and strut out with confidence.
              </p>
            </div>

            <div className="row g-4 mt-3">
              {services.map((service, index) => (
                <div className="col-md-4" key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                  <article className={`service-card service-${service.color}`}>
                    <div className="service-icon">
                      <i className={`bi ${service.icon}`}></i>
                    </div>
                    <span className="mini-number">0{index + 1}</span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to="/services" className="circle-arrow" aria-label={`Explore ${service.title}`}>
                      <i className="bi bi-arrow-up-right"></i>
                    </Link>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <Link to="/services" className="btn bb-btn bb-btn-navy">
                See all services <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="split-feature">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <div className="feature-image">
                  <img src="/images/dogs-together.jpg" alt="Two happy dogs spending time together" />
                  <div className="feature-note">
                    <i className="bi bi-heart-fill"></i>
                    <span>All the care.<br />None of the stress.</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <span className="eyebrow">MORE THAN A BATH</span>
                <h2>We make grooming<br /><span>feel like playtime.</span></h2>
                <p className="body-copy">
                  We take things at your pet's pace, use gentle products,
                  and make every visit full of reassurance. Because the best
                  glow-up starts with feeling safe.
                </p>
                <ul className="check-list">
                  <li><i className="bi bi-check-circle-fill"></i> Patient, pet-first groomers</li>
                  <li><i className="bi bi-check-circle-fill"></i> Gentle products for sensitive skin</li>
                  <li><i className="bi bi-check-circle-fill"></i> Plenty of breaks and praise</li>
                </ul>
                <Link to="/about" className="btn bb-btn bb-btn-coral mt-3">
                  Meet our crew <i className="bi bi-arrow-up-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="review-section section-pad">
          <div className="container">
            <div className="section-heading text-center" data-aos="fade-up">
              <span className="eyebrow">THE TAIL-WAG REPORT</span>
              <h2>Don't just take <span>our word.</span></h2>
            </div>

            <div className="row g-4 mt-3">
              <div className="col-md-4">
                <article className="review-card">
                  <div className="review-stars">★★★★★</div>
                  <p>“Milo came home looking adorable and acting like he just had the best day ever.”</p>
                  <div className="review-person">
                    <span className="review-avatar">M</span>
                    <div><strong>Maya & Milo</strong><small>Bath + fluff regulars</small></div>
                  </div>
                </article>
              </div>

              <div className="col-md-4">
                <article className="review-card review-card-yellow">
                  <div className="review-stars">★★★★★</div>
                  <p>“The team was so patient with our nervous pup. We finally found our grooming place!”</p>
                  <div className="review-person">
                    <span className="review-avatar">J</span>
                    <div><strong>Jordan & Pickles</strong><small>New best friends</small></div>
                  </div>
                </article>
              </div>

              <div className="col-md-4">
                <article className="review-card review-card-blue">
                  <div className="review-stars">★★★★★</div>
                  <p>“Easy booking, lovely people, and the cutest little bandana. Five stars from us.”</p>
                  <div className="review-person">
                    <span className="review-avatar">A</span>
                    <div><strong>Alex & Coco</strong><small>Happy customers</small></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <div className="cta-content">
              <div>
                <span className="eyebrow">READY FOR THE GLOW-UP?</span>
                <h2>Let's get those tails <span>wagging.</span></h2>
                <p>Your pet's next happy day is just a click away.</p>
              </div>
              <Link to="/booking" className="btn bb-btn bb-btn-navy">
                Book an appointment <i className="bi bi-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}