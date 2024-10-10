import Modal from "react-modal";
import css from "./ImageModal.module.css";
import {ImageForModal} from "../App/App"
Modal.setAppElement("#root");

interface Props{
  isOpen:Boolean;
  onRequestClose:()=>void;
  image:ImageForModal;
}

const ImageModal = ({ isOpen, onRequestClose, image }:Props) => {
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
