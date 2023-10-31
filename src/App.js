/* Third Party*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Internal source */
import Lapangan from "./pages/Lapangan";
import Admin from "./pages/Admin";
import Detail from "./pages/Lapangan/detail";
import LokasiList from "./components/ListLokasi";
import DetailLokasiLapangan from "./pages/Lokasi/detail";

/* Style */
import "./App.css";
import FormLapangan from "./components/ListLapangan/FormLapangan";
import Login from "./pages/login/Login";
import Dashboard from "./pages/Home";
import LandingPage from "./pages/LandingPages/LandingPage";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Booking Online</h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-10">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route exact path="/lapangan/:id" element={<Detail />} />
              <Route path="/lapangan" element={<Lapangan />} />
              <Route path="/lokasi" element={<LokasiList />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route
                exact
                path="/lokasi/:id/lapangan"
                element={<DetailLokasiLapangan />}
              />
              <Route
                exact
                path="/admin/lapangan/create"
                element={<FormLapangan />}
              />
              <Route
                exact
                path="/admin/lapangan/:id/edit"
                element={<FormLapangan />}
              />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
