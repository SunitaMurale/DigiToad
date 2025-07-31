import React from "react";
import "./StatsGrid.css";

const StatsGrid = () => {
  const stats = [
    { number: "5+", label: "Proof-of-Concept (PoC) Developments Supported" },
    { number: "15+", label: "Seamless System Integration Projects Completed" },
    { number: "20+", label: "Centers of Excellence (CoEs) Established Nationwide" },
    { number: "25+", label: "Collaborations with R&D Centers Across India" },
    { number: "100+", label: "Industry-Focused Training Programs Conducted" },
    { number: "5000+", label: "Learners Empowered via SkillsBlock.in Platform" },
  ];

  return (
    <div className="stats-section">
      <h2 className="stats-heading">Our Impact</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-box">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsGrid;
