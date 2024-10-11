import css from "./ImageCard.module.css";

import { Image } from "./../App/App";

interface IImageCard {
  image: Image;
  onImageClick: () => void;
}

const ImageCard = ({ image, onImageClick }: IImageCard) => {
  return (
    <img
      src={image.urls.small}
      alt={image.alt_description}
      className={css.img}
      onClick={onImageClick}
    />
  );
};

export default ImageCard;
