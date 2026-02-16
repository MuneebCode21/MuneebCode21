import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-panel"
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000, 
        padding: '1.5rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h2 style={{ letterSpacing: '4px', fontStyle: 'italic' }}>LUMINA</h2>
        </Link>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Models', 'About', 'Contact'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase' }}
            >
              {item}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>
            Test Drive
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;