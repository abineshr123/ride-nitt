document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const pickup = document.getElementById('pickup').value;
  const dropoff = document.getElementById('dropoff').value;
  const status = document.getElementById('booking-status');
  
  try {
    const response = await fetch('http://localhost:3000/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pickup, dropoff })
    });
    const data = await response.json();
    status.textContent = `Ride booked from ${pickup} to ${dropoff}! ETA: ${data.eta} minutes`;
  } catch (error) {
    status.textContent = 'Error booking ride. Please try again.';
  }
});

// Simulate vehicle location update
setInterval(() => {
  const locations = ['Admin Block', 'Hostel Zone', 'Lecture Hall'];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  document.getElementById('map').textContent = `Vehicle at: ${randomLocation}`;
}, 5000);