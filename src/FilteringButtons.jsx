import React from "react";

const FilteringButtons = ({ filterMenu }) => {
  return (
    <div className="btn-container">
      <button className="btn" onClick={() => filterMenu()}>
        All
      </button>
      <button className="btn" onClick={() => filterMenu("breakfast")}>
        Breakfast
      </button>
      <button className="btn" onClick={() => filterMenu("lunch")}>
        Lunch
      </button>
      <button className="btn" onClick={() => filterMenu("shakes")}>
        Shakes
      </button>
    </div>
  );
};

export default FilteringButtons;
