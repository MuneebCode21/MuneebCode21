import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/cars');
        setCars(res.data);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, loading }}>
      {children}
    </CarContext.Provider>
  );
};