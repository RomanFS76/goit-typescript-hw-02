import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.modalContent}>
        <img
          src={image.urls.regular}
          alt={image.urls.alt_description}          
        />
        <p>By: {image.user.name} has {image.likes} likes</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
