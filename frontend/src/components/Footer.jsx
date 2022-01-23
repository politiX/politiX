import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid1}></div>
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
      <div className={styles.grid4}>
        {" "}
        <Link to="/" state={{ category: "Bildung" }}>
          <img src="/logo.svg" alt="politiX" />
        </Link>
      </div>
    </footer>
  );
}
