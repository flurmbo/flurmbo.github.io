import React from "react";
import Modal from "react-modal";
import styles from "./projectModal.module.scss";

Modal.setAppElement('#___gatsby');

export default (props) => {
  const { selectedCard, handleCloseModal, cardData } = props;
  return (
    <Modal
    isOpen={!(selectedCard === -1)}
    shouldCloseOnOverlayClick={true}
    onRequestClose={handleCloseModal}
    className={styles.modal__content}
    overlayClassName={styles.modal__overlay}
  >
    <div>
      {cardData[selectedCard].title} is the title
    </div>
  </Modal>
)};
