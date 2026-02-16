import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Booking = () => {
  const [form, setForm] = useState({ name: '', email: '', model: 'Lumina Zenith', date: '' });
  const [status, setStatus] = useState(null); // 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/book', form);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="container" style={{ paddingTop: '150px', display: 'flex', justifyContent: 'center' }}>
      <motion.div 
        className="glass-panel" 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }}
        style={{ padding: '3rem', width: '100%', maxWidth: '600px', borderRadius: '8px' }}
      >
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Schedule Test Drive</h2>
        
        {status === 'success' ? (
          <div style={{ textAlign: 'center', color: 'var(--accent)' }}>
            <h3>Request Received</h3>
            <p>Our concierge will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input 
              type="text" placeholder="Full Name" required 
              style={inputStyle}
              onChange={e => setForm({...form, name: e.target.value})}
            />
            <input 
              type="email" placeholder="Email Address" required 
              style={inputStyle}
              onChange={e => setForm({...form, email: e.target.value})}
            />
            <select style={inputStyle} onChange={e => setForm({...form, model: e.target.value})}>
              <option value="Lumina Zenith">Lumina Zenith</option>
              <option value="Lumina Apex">Lumina Apex</option>
              <option value="Lumina Horizon">Lumina Horizon</option>
            </select>
            <input 
              type="date" required 
              style={inputStyle}
              onChange={e => setForm({...form, date: e.target.value})}
            />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Confirm Booking</button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  padding: '1rem',
  color: 'white',
  fontSize: '1rem',
  borderRadius: '4px',
  outline: 'none'
};

export default Booking;