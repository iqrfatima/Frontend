import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutUs, AgriCycle, Home, PestDetection, WeatherForecast } from "./pages/index";

const StreamlitApp = ({ route }) => (
  <iframe
    src={`http://localhost:8501/?app=${route}`}
    style={{ width: "100%", height: "100vh", border: "none" }}
    title={`Streamlit App - ${route}`}
  />
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* React Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/agricycle" element={<AgriCycle />} />
          <Route path="/weatherforecast" element={<WeatherForecast />} />
          <Route path="/pestdetection" element={<PestDetection />} />

          {/* Streamlit Routes */}
          <Route path="/app1" element={<StreamlitApp route="app1" />} />
          <Route path="/app2" element={<StreamlitApp route="app2" />} />
          <Route path="/app3" element={<StreamlitApp route="app3" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
