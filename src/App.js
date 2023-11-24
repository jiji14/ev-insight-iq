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
        <Link id="highlight" className="navItem" to="/ev-insight-iq">
          EVInsightIQ
        </Link>
        <Link
          select
          id={useMatch("/ev-insight-iq/regional-detail") ? "selected" : null}
          className="navItem"
          to="ev-insight-iq/regional-detail"
        >
          Regional Detail
        </Link>
        <Link
          id={useMatch("ev-insight-iq/ev-trends") ? "selected" : null}
          className="navItem"
          to="ev-insight-iq/ev-trends"
        >
          EV Trends
        </Link>
        <Link
          id={
            useMatch("ev-insight-iq/charging-infrastructure")
              ? "selected"
              : null
          }
          className="navItem"
          to="ev-insight-iq/charging-infrastructure"
        >
          Charging Infrastructure
        </Link>
      </nav>
      <Routes>
        <Route path="/ev-insight-iq" element={<Main />} />
        <Route path="/ev-insight-iq/regional-detail" element={<Chart1 />} />
        <Route path="/ev-insight-iq/ev-trends" element={<Chart2 />} />
        <Route
          path="/ev-insight-iq/charging-infrastructure"
          element={<Chart3 />}
        />
      </Routes>
    </div>
  );
};

export default App;
