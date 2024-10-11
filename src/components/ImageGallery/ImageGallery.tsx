import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import {Image} from "../App/App";


interface IImageGallery {
  images:Image[];
  onImageClick:(image:Image)=>void;
}

const ImageGallery = ({ images,onImageClick }:IImageGallery) => {
  return (
    <div className={css.wrapGallery}>
      <ul className={css.galleryList}>
        {images.map(image => (
          <li key={image.id} className={css.galleryItem}>
              <ImageCard
                image={image}
                onImageClick={() => onImageClick(image)}
              ></ImageCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
