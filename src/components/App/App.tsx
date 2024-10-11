import { useEffect, useState } from "react";
import "./App.css";
import { getImagesApi } from "../../api/unsplash";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMassage/ErrorMassage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export interface Image {
  id:string;
  urls:{
    small:string;
    regular:string;
  }
  alt_description:string;
  user:{
    name:string;
  }
  likes:number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isModalIsOpen, setIsModalOpen] = useState<boolean>(false);



  function openModal(image:Image) {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedImage(null);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await getImagesApi(query, page);
        console.log(data);
        setImages((prev) => [...prev, ...data]);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    query && fetchData();
  }, [page, query]);

  const handleSubmit = async (searchQuery:string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar submit={handleSubmit}></SearchBar>
      {error && <ErrorMassage></ErrorMassage>}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal}></ImageGallery>
      )}
      {loading && <Loader></Loader>}
      {images.length > 0 && (
        <LoadMoreBtn loadmore={handleLoadMore}></LoadMoreBtn>
      )}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalIsOpen}
          onRequestClose={closeModal}
        ></ImageModal>
      )}
    </>
  );
}

export default App;
