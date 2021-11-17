import React from "react";
// import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src="/logo.svg" alt="politiX" />
      </a>
      <div className="menu-ico">
        <img src="/home.svg" alt="home" style={{ width: "100%" }} />
        <img src="/profile.svg" alt="profile" style={{ width: "100%" }} />
        <img src="/menu.svg" alt="menu" style={{ width: "100%" }} />
      </div>
    </header>
  );
}
