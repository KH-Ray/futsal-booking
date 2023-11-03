import { Link } from "react-router-dom";
import { useState } from "react";
import "./LandingPage.css";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="landing-page">
      <div className="menu">
      <video autoPlay loop muted className="video-background">
        <source src="/vidio/video..mp4" type="video/mp4" />
      </video>
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
      <div className="pilihan">
        <h2>Mau main dimana?</h2>
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
            <button onClick={scrollToTop}>Cari</button>
          </Link>
        </div>
      </div>
      {/* Isi konten tambahan sesuai dengan kebutuhan Anda */}
      <div className="additional-content">
        <h3>Selamat Datang di Webset Booking Online</h3>
        <p>
          Aplikasi ini memudahkan Anda dalam mencari lapangan olahraga di berbagai lokasi yang tersedia. Silakan pilih lokasi dan tanggal yang Anda inginkan, lalu tekan tombol "Cari" untuk melihat lapangan yang tersedia.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
