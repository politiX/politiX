import React from "react";
import { Link } from "gatsby";
import { useState } from "react"
import Burger from "./Burger"

export default function Top() {

    const [src, setSrc] = useState('/menu.svg')

    const burgerClick = (e) => {
        let state = e.target.previousSibling.childNodes[0].classList
        let obj = e.target.previousSibling.childNodes[0]
        let w = e.target.previousSibling

        console.log(w)

        if (state.contains('active') === false) {
            state.add('active')
            w.style.width = '140px';
            obj.style.top = '-5px'
            setSrc('/close.svg')
        } else {
            state.remove('active')
            w.style.width = '0';
            obj.style.top = '-140px'
            setSrc('/menu.svg')
        }
    }

  return (
    <header>
      <Link to="/" state={{category: "Bildung"}}>
        <img src="/logo.svg" alt="politiX" />
      </Link>
      <div className="menu-ico">
          <Burger />
          <img src={src} alt="menu" style={{ width: "100%" }} onClick={burgerClick}/>
      </div>
    </header>
  );
}
