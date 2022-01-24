import React from "react";
import '../styles/global.css';
import Header from './Header';
import Footer from'./Footer';

export default function Layout({ children, loadData, category }) {
    return (
        <div className='layout'>
            <Header loadData={loadData} category={category}/>
            <div className='content'>
                { children }
            </div>
            <Footer>

            </Footer>
        </div>
    )
}