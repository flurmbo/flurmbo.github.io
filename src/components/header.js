import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.scss";

export default () => (
  <nav className={styles.navBar}>
    <div className={styles.navLeft}>
      <div>
        <Link to="/" className={styles.navLeft__link}>
          Phil Marshall
        </Link>
      </div>
    </div>
    <div className={styles.navRight}>
      <div>
        <Link to="/" className={styles.navRight__link}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/blog" className={styles.navRight__link}>
          Blog
        </Link>
      </div>
      <div>
        <a
          href="mailto:phillipsolomonmarshall@gmail.com"
          className={styles.navRight__link}
        >
          Contact
        </a>
      </div>
    </div>
  </nav>
);
