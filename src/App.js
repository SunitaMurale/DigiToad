// App.jsx
import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import "./App.css";
import StatsGrid from "./components/StatsGrid";
import EmpoweringSection from "./components/EmpoweringSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <Services />
      <StatsGrid />
      <EmpoweringSection />
      <Footer />
    </div>
  );
}

export default App;
