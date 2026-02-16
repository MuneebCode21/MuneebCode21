import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Models = () => {
  const { cars, loading } = useContext(CarContext);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  if (loading) return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>INITIALIZING...</div>;

  return (
    <div style={{ paddingTop: '150px', backgroundColor: '#000', minHeight: '100vh' }}>
      <div className="container">
        <motion.div 
          variants={containerVars} initial="hidden" animate="show"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}
        >
          {cars.map((car) => (
            <motion.div key={car.id} variants={itemVars} className="glass-card" style={{ overflow: 'hidden', position: 'relative' }}>
               <div style={{ height: '400px', overflow: 'hidden' }}>
                 <img src={car.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={car.name} />
               </div>
               <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontFamily: 'var(--font-header)', fontSize: '1.2rem' }}>{car.name}</h2>
                    <span style={{ color: 'var(--accent)' }}>{car.specs.acceleration}</span>
                  </div>
                  <hr style={{ margin: '1.5rem 0', opacity: 0.1 }} />
                  <Link to={`/models/${car.id}`} className="btn-primary" style={{ width: '100%', textAlign: 'center', padding: '1rem 0' }}>View Details</Link>
               </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Models;