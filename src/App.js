import React from "react";
import { Route, Routes, Link, useMatch } from "react-router-dom";
import Main from "./Tableau/Main";
import Chart1 from "./Tableau/RegionalDetail";
import Chart2 from "./Tableau/EVTrends";
import Chart3 from "./Tableau/ChargingInfrastructure";

const App = () => {
  return (
    <div>
      <nav className="nav">
        <Link id="highlight" className="navItem" to="/">
          EVInsightIQ
        </Link>
        <Link
          select
          id={useMatch("/regional-detail") ? "selected" : null}
          className="navItem"
          to="/regional-detail"
        >
          Regional Detail
        </Link>
        <Link
          id={useMatch("/ev-trends") ? "selected" : null}
          className="navItem"
          to="/ev-trends"
        >
          EV Trends
        </Link>
        <Link
          id={useMatch("/charging-infrastructure") ? "selected" : null}
          className="navItem"
          to="/charging-infrastructure"
        >
          Charging Infrastructure
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/regional-detail" element={<Chart1 />} />
        <Route path="/ev-trends" element={<Chart2 />} />
        <Route path="/charging-infrastructure" element={<Chart3 />} />
      </Routes>
    </div>
  );
};

export default App;
