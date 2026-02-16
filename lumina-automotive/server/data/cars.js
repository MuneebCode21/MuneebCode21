const cars = [
  {
    id: "lumina-zenith",
    name: "Lumina Zenith",
    tagline: "Silence is the new loud.",
    category: "Sedan",
    price: 89000,
    specs: { range: "520 mi", acceleration: "2.1s", topSpeed: "200 mph" },
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
    description: "The Zenith redefines executive travel with an interior inspired by private aviation and a drivetrain born from Formula E."
  },
  {
    id: "lumina-apex",
    name: "Lumina Apex",
    tagline: "Conquer every terrain.",
    category: "SUV",
    price: 115000,
    specs: { range: "450 mi", acceleration: "3.2s", topSpeed: "180 mph" },
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    description: "Safety meets savagery. The Apex features our proprietary Lidar shield technology wrapped in a carbon-fiber exoskeleton."
  },
  {
    id: "lumina-horizon",
    name: "Lumina Horizon",
    tagline: "Beyond the edge of physics.",
    category: "Hypercar",
    price: 250000,
    specs: { range: "400 mi", acceleration: "1.9s", topSpeed: "250 mph" },
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=2070&auto=format&fit=crop",
    description: "Limited to 50 units worldwide. The Horizon is not just a car; it is a collector's piece of velocity."
  }
];

module.exports = cars;