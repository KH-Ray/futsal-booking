import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./About";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<LandingPage/>} />
        <Route path="/pages/Dashboard" element={<Dashboard/>} /> 
        <Route path="/pages/Login" element={<Login/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Router>
  );  
}

export default App;
  