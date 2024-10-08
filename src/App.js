import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Recipes from "./pages/recipes";
import AboutMe from "./pages/aboutme";
import RecipePage from "./pages/recipepage"; // Import RecipePage

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/recipes" element={<Recipes />} /> 
          <Route path="/recipes/:recipePath" element={<RecipePage />} />
          <Route path="/aboutme" element={<AboutMe />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
