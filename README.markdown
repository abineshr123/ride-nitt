# Ride NITT

A web-based application for booking and tracking e-vehicle rides within NIT Trichy campus.

## Features
- Book rides by selecting pickup and drop-off locations.
- View simulated real-time e-vehicle location.
- Get estimated time of arrival (ETA) for booked rides.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd ride-nitt
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Backend Server**:
   ```bash
   node server.js
   ```

4. **Serve the Frontend**:
   - Open `index.html` in a browser or use a local server (e.g., `npx http-server`).

5. **Docker Setup**:
   ```bash
   docker build -t ride-nitt .
   docker run -p 3000:3000 ride-nitt
   ```

## Endpoints
- **POST /book**
  - Request: `{ "pickup": "Admin Block", "dropoff": "Hostel Zone" }`
  - Response: `{ "message": "Ride booked", "eta": 7 }`

## Deployment
- Deployed on [Heroku](#) (replace with your deployment URL).
- Ensure the backend is running and accessible.
- Frontend can be hosted on any static hosting service (e.g., Netlify, Vercel).

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Containerization**: Docker