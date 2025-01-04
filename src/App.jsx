import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes
import './App.css';
import { AboutUs, AgriCycle, Home, PestDetection, WeatherForecast } from './pages/index';

function App() {
  return (
    <Router>
      <Routes>  {/* Replace Switch with Routes */}
        <Route path="/" element={<Home />} />  {/* Use element instead of component */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/agricycle" element={<AgriCycle />} />
        <Route path="/weatherforecast" element={<WeatherForecast />} />
        <Route path="/pestdetection" element={<PestDetection />} />
      </Routes>
    </Router>
  );
}

export default App;
