import React from "react";
import styles from "./projectCard.module.scss";

export default React.forwardRef((props, ref) => {
  const { title, description, handleClick, show, alt } = props;
  return (
  <div 
  className={styles.card + (show ? '' : ' ' + styles.card__hide)} 
  
  onClick={handleClick}>
    <img ref={ref} className ={styles.card__logo} src="./logo.jpg" alt={alt} />
    <div className={styles.card__content}>
    <div className={styles.card__title}>{title}</div>
    <div className={styles.card__description}>{description}</div>
    </div>
  </div>
)});