import React from "react";
import Top from "./Top";
import Nav from './Swipe';

export default function Header() {
    return (
        <div className='header'>
            <Top/>
            <nav>
                <Nav/>
            </nav>
        </div>
    );
}
