import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VentureInGuntur from "./pages/ventureInGuntur";
import VentureDetails from "./pages/ventureDetails";
import CompanyDetails from "./pages/CompanyDetails";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/venture-in-guntur" element={<VentureInGuntur />} />
                <Route path="/venture-details" element={<VentureDetails />} />
                <Route path="/company-details" element={<CompanyDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
