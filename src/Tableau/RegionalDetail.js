import React, { useEffect, useRef } from "react";
import "../App.css";
import tableau from "tableau-api";

function RegionalDetail() {
  const vizContainer = useRef(null);

  const initTableau = () => {
    const vizUrl =
      "http://public.tableau.com/views/RegionalSampleWorkbook/Storms";
    let viz = new window.tableau.Viz(vizContainer.current, vizUrl);
  };

  useEffect(() => {
    initTableau();
  }, []);

  return (
    <div className="layout">
      <h1>Regional Detail</h1>
      <div ref={vizContainer} style={{ padding: "20px" }}></div>
    </div>
  );
}

export default RegionalDetail;
