import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const ModelDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/cars/${id}`).then(res => setCar(res.data));
  }, [id]);

  if (!car) return <div style={{ paddingTop: '150px' }}>Loading...</div>;

  return (
    <div style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>{car.name}</h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '2rem' }}>{car.tagline}</p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{car.description}</p>
            
            <div style={{ display: 'flex', gap: '3rem', margin: '3rem 0' }}>
              <div>
                <h4 style={{ color: 'var(--text-muted)' }}>0-60 mph</h4>
                <h2>{car.specs.acceleration}</h2>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)' }}>Range</h4>
                <h2>{car.specs.range}</h2>
              </div>
              <div>
                <h4 style={{ color: 'var(--text-muted)' }}>Top Speed</h4>
                <h2>{car.specs.topSpeed}</h2>
              </div>
            </div>

            <Link to="/booking" className="btn-primary">Order Now</Link>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img src={car.image} alt={car.name} style={{ width: '100%', borderRadius: '8px' }} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;