import { useEffect, useState } from "react";
import "./App.css";
import { getImagesApi } from "../../../api/unsplash";
import SearchBar from "../../SearchBar/SearchBar";
import ImageGallery from "../../ImageGallery/ImageGallery";
import Loader from "../../Loader/Loader";
import ErrorMassage from "../ErrorMassage";
import LoadMoreBtn from "../../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../../ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalIsOpen, setIsModalOpen] = useState(false);



  function openModal(image) {
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

  const handleSubmit = async (searchQuery) => {
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
