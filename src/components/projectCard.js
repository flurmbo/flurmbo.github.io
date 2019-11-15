import React from "react";
import styles from "./projectCard.module.scss";

export default (props) => {
  const { title, description, setSelectedCard } = props;
  return (
  <div className={styles.card} onClick={setSelectedCard}>
    <img className ={styles.card__logo} src="./logo.jpg"/>
    <div className={styles.card__content}>
    <div className={styles.card__title}>{title}</div>
    <div className={styles.card__description}>{description}</div>
    </div>
  </div>
)};