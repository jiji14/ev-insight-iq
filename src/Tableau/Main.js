import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Main() {
  return (
    <div className="layout">
      <h1>
        Welcome to <span id="highlight">EVInsightIQ!</span>
      </h1>
      <p>
        <div className="main">
          Explore the Electric Vehicle (EV) Revolution in Washington State with
          insights from other States{" "}
        </div>
        <div className="sub">Here are the 3 features:</div>
        <div className="sub">
          <Link to="ev-insight-iq/regional-detail">Regional Detail</Link> :
          Discover which regions lead the way in EV adoption and explore the
          factors that are driving this trend.
        </div>
        <div className="sub">
          <Link to="ev-insight-iq/ev-trends">EV Trends</Link> : Get to know the
          most preferred EV brands and models, and analyze consumer preferences.
        </div>
        <div className="sub">
          <Link to="ev-insight-iq/charging-infrastructure">
            Charging Infrastructure
          </Link>{" "}
          : Understand how charging stations influence EV adoption and their
          availability across the state.
        </div>
      </p>
    </div>
  );
}

export default Main;
