import React from "react";
import "./btn.css";
import "./topbar.css";

const TopBar = () => {
  const handleclick = () => {
    let body = document.querySelector('body')
    body.classList.toggle('night')
  };
  return (
      
    <div id="top">
      <h1>Nikhil Tiwari</h1>
      <label className="switch">
        <input
          className="switch__input"
          type="checkbox"
          onClick={handleclick}
        />
        <span className="switch__background">
          <span className="switch__toggle">
            <span className="switch__moon"></span>
          </span>
          <span className="switch__stars"></span>
          <span className="switch__clouds"></span>
        </span>
      </label>
    </div>
  );
};
export default TopBar;
