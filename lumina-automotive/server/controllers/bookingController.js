exports.createBooking = (req, res) => {
  const { model, name, date, email } = req.body;
  
  if (!model || !name || !date || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Logic to save to DB would go here
  console.log(`[BOOKING CONFIRMED] ${name} booked ${model} for ${date}`);
  
  res.status(201).json({ 
    message: "Test drive scheduled successfully.", 
    bookingId: Math.random().toString(36).substr(2, 9).toUpperCase() 
  });
};