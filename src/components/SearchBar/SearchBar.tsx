import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from 'react-hot-toast';

export const SearchBar = ({ submit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchInput = form.elements.search.value;
    if (searchInput==='') {
      toast.error('Field must be filled', {duration: 1500,position: 'top-center',padding: '50px'});
      return
    }
    submit(searchInput);
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <input
          className={css.formInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          autoFocus
          autoComplete="off"
        />
        <button className={css.formBtn} type="submit">
          <CiSearch size="28" />
        </button>
        <Toaster/>
      </div>
    </form>
  );
};

export default SearchBar;
