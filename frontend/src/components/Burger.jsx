import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/burger.module.css"

export default function Burger() {
    return (
        <div className={styles.ww}>
            <div className={styles.w}>
                <Link to='/'><p>Home</p></Link>
                <Link to='/profile'><p>Profil</p></Link>
                <Link to='/about'><p>About</p></Link>
                <Link to='/login'><p>Logout</p></Link>
                <Link to='/impressum'><p>Impressum</p></Link>
            </div>
        </div>
    );
}