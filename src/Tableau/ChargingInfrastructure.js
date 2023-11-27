import React, { useEffect, useRef } from "react";
import "../App.css";
import tableau from "tableau-api";

function ChargingInfrastructure() {
  const vizContainer = useRef(null);

  const initTableau = () => {
    const vizUrl = "https://public.tableau.com/views/inf_dash/inf_dash";
    const options = {
      height: window.innerHeight - 250,
      width: window.innerWidth - 130,
      hideToolbar: true,
    };
    let viz = new window.tableau.Viz(vizContainer.current, vizUrl, options);

    function autoResize() {
      const width = window.innerWidth - 130;
      const height = window.innerHeight - 250;

      viz.setFrameSize(width, height);
    }

    window.addEventListener("resize", () => {
      console.log(
        `Resizing the window: ${window.innerHeight}, ${window.innerWidth}`
      );
      autoResize();
    });
  };

  useEffect(() => {
    initTableau();
  }, []);

  return (
    <div className="layout">
      <h1>Charging Infrastructure</h1>
      <div ref={vizContainer} style={{ padding: "20px" }}></div>
    </div>
  );
}

export default ChargingInfrastructure;
