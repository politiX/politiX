import React from "react";
import Burger from "./Burger"

export default function Top() {
  return (
    <header>
      <a href="/">
        <img src="/logo.svg" alt="politiX" />
      </a>
      <div className="menu-ico">
          <Burger />
        <img src="/menu.svg" alt="menu" style={{ width: "100%" }} />
      </div>
    </header>
  );
}
