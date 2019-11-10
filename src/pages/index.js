import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.scss"

export default () => (
  <Layout>
    <div className={styles.header}>
      <div className={styles.header__textBox}>
        <h1 className={styles.header__headingPrimary}>Phil Marshall</h1>
        <h2 className={styles.header__headingSecondary}>Web Developer</h2>
      </div>
    </div>
    <div>
      Sorry, this website is a bit incomplete right now. Stay tuned for updates!
    </div>
  </Layout>
)
