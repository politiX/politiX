import React from "react";
import '../styles/global.css';
import Header from './Header';

export default function Layout({ children, loadData }) {
    return (
        <div className='layout'>
            <Header loadData={loadData}/>
            <div className='content'>
                { children }
            </div>
            <footer>
                <p>copyright politiX 2021</p>
            </footer>
        </div>
    )
}