import './LandingPage.css'; 
import { Link } from "react-router-dom";

const locations = [
  "Jakrta",
  "Tangerang",
  "Bekasi",
  "Bogor",
  "Bandung",
  "Pamulang",
 
];

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="login">
        <a href="/Login">Login</a>
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
        <Link to="/Login">
        <button>Cari</button>
        </Link>
      </div>
    </div>
  );
}


export default LandingPage;
