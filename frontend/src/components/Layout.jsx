import React from "react";
import Navbar from "./Navbar";
import '../styles/global.css';
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div className='layout'>
            <Header />
            <Navbar />
            <div className='content'>
                { children }
            </div>
            <footer>
                <p>copyright politiX 2021</p>
            </footer>
        </div>
    )
}