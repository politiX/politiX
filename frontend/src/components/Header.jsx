import React from "react";
import Top from "./Top";
import Nav from './Nav';

export default function Header({ loadData, category }) {
    return (
        <div className='header'>
            <Top/>
            <nav>
                <Nav loadData={loadData} category={category}/>
            </nav>
        </div>
    );
}
