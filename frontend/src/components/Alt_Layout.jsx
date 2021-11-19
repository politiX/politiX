import React from "react";
import '../styles/global.css';
import Top from './Top';

export default function Alt_Layout({ children }) {
    return (
        <div className='layout alt'>
            <Top />
            <div className='content'>
                { children }
            </div>
            <footer>
                <p>copyright politiX 2021</p>
            </footer>
        </div>
    )
}