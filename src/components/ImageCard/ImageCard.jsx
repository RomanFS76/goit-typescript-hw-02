import css from "./ImageCard.module.css"

const ImageCard = ({ image,onImageClick}) => {
  return (

      <img src={image.urls.small} alt={image.urls.alt_description} className={css.img} onClick={onImageClick}/>

  );
};

export default ImageCard;
