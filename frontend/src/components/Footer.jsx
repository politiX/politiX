import React, {useState, useEffect, useRef } from "react";
import {Link} from "gatsby";
import * as styles from "../styles/footer.module.css";

export default function Footer() {



    const ref = useRef(null)
    var lastScrollTop = 0;
    var up = false;

    useEffect(() => {
        console.log(ref)
        if (ref.current) {
            window.addEventListener('scroll', (e) => {
                var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
                if (st > lastScrollTop){
                    up = false
                    document.querySelector('.footer').classList.remove('active')
                } else {
                    if (!up) {
                        document.querySelector('.footer').classList.add('active')
                        up = true
                    }

                }
                lastScrollTop = st <= 0 ? 0 : st;
            })
        }

    }, [])

    return (
        <footer className={'footer'}>
            <div className={styles.grid1} ref={ref}></div>
            <div className={styles.grid2}>
                <Link to="/profile">
                    <p>Profil</p>
                </Link>

                <Link to="/login">
                    <p>Logout</p>
                </Link>
            </div>
            <div className={styles.grid3}>
                {" "}
                <Link to="/about">
                    <p>About</p>
                </Link>
                <Link to="/impressum">
                    <p>Impressum</p>
                </Link>{" "}
            </div>
            <div className={styles.footerLogo}>
                {" "}
                <Link to="/" state={{category: "Bildung"}}>
                    <img src="/logo.svg" alt="politiX"/>
                </Link>
            </div>
        </footer>
    );
}
