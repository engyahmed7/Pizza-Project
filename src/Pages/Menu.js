import React from "react";
import { MenuList } from "../MenuParts/MenuList";
import "../styles/Menu.css";
import MenuItem from "../MenuParts/MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle"> Our Menu</h1>
      <div className="menuList">
        {MenuList.map((mItm) => {
          return (
            <MenuItem image={mItm.image} name={mItm.name} price={mItm.price} />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
