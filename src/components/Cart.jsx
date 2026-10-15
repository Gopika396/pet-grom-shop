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

export default function Cart() {
  const [items, setItems] = React.useState(() =>
    JSON.parse(localStorage.getItem("bbCart") || "[]")
  );
  const [checkedOut, setCheckedOut] = React.useState(false);

  const save = (nextItems) => {
    setItems(nextItems);
    localStorage.setItem("bbCart", JSON.stringify(nextItems));
  };

  const changeQty = (id, amount) => {
    save(items.map((item) =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + amount) } : item
    ));
  };

  const remove = (id) => save(items.filter((item) => item.id !== id));
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero page-hero-blue">
          <div className="container">
            <span className="eyebrow">YOUR HAPPY LITTLE HAUL</span>
            <h1>Good stuff for<br /><span>your best friend.</span></h1>
            <p>Check your picks and get ready to spoil your favourite furry face.</p>
            <div className="breadcrumb-line"><Link to="/">Home</Link><i className="bi bi-chevron-right"></i><span>Cart</span></div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container">
            <div className="row g-4 align-items-start">
              <div className="col-lg-8">
                <div className="cart-panel">
                  <div className="cart-panel-heading">
                    <h2>Your cart</h2>
                    <span>{count} item(s)</span>
                  </div>

                  {checkedOut ? (
                    <div className="success-panel">
                      <i className="bi bi-check-circle-fill"></i>
                      <h3>Demo checkout complete!</h3>
                      <p>This is a frontend demo only. No payment was taken and no order was sent.</p>
                      <button className="btn bb-btn bb-btn-navy" onClick={() => { save([]); setCheckedOut(false); }}>
                        Clear cart
                      </button>
                    </div>
                  ) : items.length === 0 ? (
                    <div className="empty-cart">
                      <div className="empty-cart-icon"><i className="bi bi-bag-heart"></i></div>
                      <h3>Your cart is taking a nap.</h3>
                      <p>Let's find something lovely for your furry friend.</p>
                      <Link to="/products" className="btn bb-btn bb-btn-coral">
                        Shop pet goodies <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  ) : (
                    <>
                      {items.map((item) => (
                        <div className="cart-item" key={item.id}>
                          <img src={item.img && item.img.includes("/") ? item.img : getImg(item.img)} alt={item.name} />
                          <div className="cart-item-details">
                            <h3>{item.name}</h3>
                            <span>₹{item.price} each</span>
                            <button className="remove-link" onClick={() => remove(item.id)}>Remove</button>
                          </div>
                          <div className="qty-control">
                            <button onClick={() => changeQty(item.id, -1)} aria-label="Decrease quantity">−</button>
                            <span>{item.qty}</span>
                            <button onClick={() => changeQty(item.id, 1)} aria-label="Increase quantity">+</button>
                          </div>
                          <strong className="cart-line-total">₹{item.price * item.qty}</strong>
                        </div>
                      ))}
                      <div className="cart-continue">
                        <Link to="/products"><i className="bi bi-arrow-left"></i> Continue shopping</Link>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="col-lg-4">
                <aside className="order-summary">
                  <h3>Order summary</h3>
                  <div className="summary-line"><span>Subtotal</span><strong>₹{total}</strong></div>
                  <div className="summary-line"><span>Delivery</span><strong>{items.length ? "Calculated later" : "—"}</strong></div>
                  <div className="summary-line summary-total"><span>Total</span><strong>₹{total}</strong></div>
                  <p className="summary-note"><i className="bi bi-shield-check"></i> Secure checkout demo</p>
                  <button className="btn bb-btn bb-btn-coral w-100" disabled={!items.length} onClick={() => setCheckedOut(true)}>
                    Continue to checkout <i className="bi bi-arrow-up-right"></i>
                  </button>
                  <p className="checkout-disclaimer">Demo only — no real payment processing.</p>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}