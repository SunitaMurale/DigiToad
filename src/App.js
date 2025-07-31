// App.jsx
import React from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Services from "./components/Services";
import WhatWeAreLookingFor from "./components/WhatWeAreLookingFor";
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
      {/* <WhatWeAreLookingFor /> */}
      <EmpoweringSection />
      <Footer />
    </div>
  );
}

export default App;
