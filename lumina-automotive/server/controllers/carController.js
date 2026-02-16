const cars = require('../data/cars');

exports.getAllCars = (req, res) => {
  try {
    // Simulating database latency for realism
    setTimeout(() => res.json(cars), 300);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getCarById = (req, res) => {
  const car = cars.find(c => c.id === req.params.id);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};