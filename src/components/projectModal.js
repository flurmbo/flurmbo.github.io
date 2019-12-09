import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import styles from "./projectModal.module.scss";

Modal.setAppElement("#___gatsby");

export default props => {
  const { selectedCard, handleCloseModal, cardData, alt, coords } = props;
  const imageRef = useRef();
  const [imageRect, setImageRect] = useState(undefined); 

  const handleOpen = () => {
    if (imageRef.current) {
      // setImageRect(imageRef.current.getBoundingClientRect());
      const rect = imageRef.current.getBoundingClientRect();
      console.log(`rect.x: ${rect.x} rect.y: ${rect.y}`);
      setTimeout(() => imageRef.current.setAttribute('style', `
        transform-origin:top left;
        transform: translate(${coords.x - rect.x}px, ${coords.y - rect.y}px) scale(.25);
      `), 300);
    }
  }
  return (
    <Modal
      isOpen
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleCloseModal}
      className={styles.modal__content}
      overlayClassName={styles.modal__overlay}
      onAfterOpen={handleOpen}
    >
      <img
        className={styles.modal__logo}
        src="./logo.jpg"
        alt={alt}
        ref={imageRef}
        
        // style={

        // }
      />
      <div>
        <div className={styles.modal__title}>{cardData.title}</div>
        <div className={styles.modal__description}>{cardData.content}</div>
      </div>
    </Modal>
  );
};
