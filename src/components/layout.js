import React from "react";
import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.scss";

export default props => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header />

      {children}
      <Footer />
    </div>
  );
};
