import "./LandingPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function LandingPage() {
  const locations = [
    "Jakarta",
    "Tangerang",
    "Bekasi",
    "Bogor",
    "Bandung",
    "Pamulang",
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="landing-page">
      <div className="menu">
        <div className="home-dropdown" onClick={toggleDropdown}>
          Menu
          <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/Lapangan">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Logout">Logout</Link>
          </div>
        </div>
      </div>
      <h1>Mau main dimana?</h1>
      <select>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      <input type="date" />
      <div>
        <Link to="/pages/Dashboard">
          <button>Cari</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
