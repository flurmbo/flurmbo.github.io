import React from "react";
import Modal from "react-modal";
import styles from "./projectModal.module.scss";

Modal.setAppElement('#___gatsby');

export default (props) => {
  const { selectedCard, handleCloseModal, cardData } = props;
  console.log('data',cardData)
  return (
    <Modal
    isOpen={!(selectedCard === -1)}
    shouldCloseOnOverlayClick={true}
    onRequestClose={handleCloseModal}
    className={styles.modal__content}
    overlayClassName={styles.modal__overlay}
  >
    <img className ={styles.modal__logo} src="./logo.jpg" />
    <div>
    <div className={styles.modal__title}>{cardData.title}</div>
    <div className={styles.modal__description}>{cardData.content}</div>
    </div>
  </Modal>
)};
