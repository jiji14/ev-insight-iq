import React, { useEffect, useRef } from "react";
import "../App.css";
import tableau from "tableau-api";

function RegionalDetail() {
  const vizContainer = useRef(null);

  const initTableau = () => {
    const vizUrl =
      "https://public.tableau.com/views/ev-insight-region/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
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
      <h1>Regional Detail</h1>
      <div ref={vizContainer} style={{ padding: "20px" }}></div>
    </div>
  );
}

export default RegionalDetail;
