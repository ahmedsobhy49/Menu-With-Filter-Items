import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ menuData }) => {
  return (
    <div className="section-center">
      {menuData.map((menuItemData) => {
        return <MenuItem key={menuItemData.id} menuItemData={menuItemData} />;
      })}
    </div>
  );
};

export default Menu;
