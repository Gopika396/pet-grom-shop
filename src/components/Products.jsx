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

const products = [
  { id: 1, name: "Cloud Nine Shampoo", category: "Bath time", price: 499, color: "blue", img: "https://images.unsplash.com/photo-1601758123927-196f2a9e9f75?auto=format&fit=crop&w=700&q=80", label: "BEST SELLER" },
  { id: 2, name: "Zoomies Grooming Brush", category: "Coat care", price: 349, color: "yellow", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=700&q=80", label: "PET PARENT PICK" },
  { id: 3, name: "Paw Butter Balm", category: "Paw care", price: 299, color: "coral", img: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=700&q=80", label: "LITTLE LUXURY" },
  { id: 4, name: "Snuggle Dry Towel", category: "Bath time", price: 599, color: "blue", img: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80", label: "SOFT & FLUFFY" },
  { id: 5, name: "Fresh Breath Spray", category: "Daily care", price: 279, color: "coral", img: "https://images.unsplash.com/photo-1582798358481-d199fb7347bb?auto=format&fit=crop&w=700&q=80", label: "QUICK FRESHEN" },
  { id: 6, name: "Happy Paws Comb", category: "Coat care", price: 399, color: "yellow", img: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=80", label: "GROOMER FAVE" }
];

export default function Products() {
  const [added, setAdded] = React.useState("");
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("bbCart") || "[]");
    const found = cart.find((item) => item.id === product.id);
    const updated = found ? cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) : [...cart, { ...product, qty: 1 }];
    localStorage.setItem("bbCart", JSON.stringify(updated));
    setAdded(product.name);
    window.setTimeout(() => setAdded(""), 1800);
  };
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero page-hero-yellow"><div className="container"><span className="eyebrow">THE GOOD STUFF SHOP</span><h1>Little things for<br /><span>very good pets.</span></h1><p>Pet-parent-approved goodies for bath time, brush time, and all the in-between moments.</p><div className="breadcrumb-line"><Link to="/">Home</Link><i className="bi bi-chevron-right"></i><span>Shop</span></div></div></section>
        <section className="section-pad"><div className="container"><div className="shop-toolbar"><div><span className="eyebrow">OUR HAPPY SHELF</span><h2>Goodies worth <span>sniffing out.</span></h2></div><Link to="/cart" className="btn bb-btn bb-btn-navy"><i className="bi bi-bag"></i> View cart</Link></div>{added && <div className="cart-toast"><i className="bi bi-check-circle-fill"></i> Added {added} to your cart!</div>}<div className="row g-4 mt-2">{products.map((p, i) => <div className="col-sm-6 col-lg-4" key={p.id} data-aos="fade-up" data-aos-delay={(i % 3) * 70}><article className="product-card"><div className={`product-image product-${p.color}`}><img src={p.img} alt={p.name} /><span className="product-label">{p.label}</span></div><div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><div className="product-bottom"><strong>₹{p.price}</strong><button className="add-cart-btn" onClick={() => addToCart(p)} aria-label={`Add ${p.name} to cart`}><i className="bi bi-plus-lg"></i></button></div></div></article></div>)}</div><p className="pricing-note mt-4"><i className="bi bi-info-circle"></i> Product photos are demo images. Replace them with your own product photos before publishing.</p></div></section>
      </main>
      <Footer />
    </>
  );
}