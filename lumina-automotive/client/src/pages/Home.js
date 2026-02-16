import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero-gradient" style={{ minHeight: '100vh', padding: '0 5%' }}>
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
          >
            <h4 style={{ color: 'var(--accent)', letterSpacing: '8px', marginBottom: '1rem', fontFamily: 'var(--font-header)' }}>
              SERIES 01
            </h4>
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: 'var(--font-header)', lineHeight: 0.9, marginBottom: '2rem' }}>
              PURE <br /> PERFORMANCE.
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '500px', marginBottom: '3rem' }}>
              Engineering the impossible. Lumina Zenith combines hyper-intelligent aerodynamics with an uncompromising 1,200HP electric drivetrain.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/models" className="btn-primary" style={{ padding: '1.2rem 3rem' }}>Explore The Fleet</Link>
              <button style={{ background: 'transparent', color: '#fff', border: '1px solid #444', padding: '1.2rem 3rem', cursor: 'pointer' }}>
                Watch Film
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lengthy details section */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {[
            { title: "Aerodynamics", desc: "Active wing technology that adjusts in real-time." },
            { title: "E-Drivetrain", desc: "Dual-motor setup delivering 0-60 in 1.9 seconds." },
            { title: "Sustainable Lux", desc: "Interior crafted from mycelium and recycled ocean plastics." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="glass-card" 
              style={{ padding: '3rem' }}
            >
              <h3 style={{ fontFamily: 'var(--font-header)', fontSize: '1rem', marginBottom: '1rem' }}>{feature.title}</h3>
              <p style={{ color: '#666' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;