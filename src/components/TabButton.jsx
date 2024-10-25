import React from "react";

const TabButton = ({ tab, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {tab}
    </button>
  );
};

export default TabButton;
