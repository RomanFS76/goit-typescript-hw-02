import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");
import { Image } from "../App/App";

interface IImageModal {
  isOpen: boolean;
  onRequestClose: () => void;
  image: Image;
}

const ImageModal = ({ isOpen, onRequestClose, image }: IImageModal) => {
  if (!image) return;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div className={css.modalContent}>
        <img src={image.urls.regular} alt={image.alt_description} />
        <p>
          By: {image.user.name} has {image.likes} likes
        </p>
      </div>
    </Modal>
  );
};

export default ImageModal;
