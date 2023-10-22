import './LandingPage.css'; 

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
        <a href="./login">Login</a>
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
      <button>Cari</button>
    </div>
  );
}


export default LandingPage;
