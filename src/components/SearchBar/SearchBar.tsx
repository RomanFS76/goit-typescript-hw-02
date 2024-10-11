import css from "./SearchBar.module.css";
import { CiSearch } from "react-icons/ci";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent } from "react";

interface ISearchBar {
  submit: (searchInput: string) => void;
}

export const SearchBar = ({ submit }:ISearchBar) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;


    const searchInput = form.elements.namedItem("search") as HTMLInputElement;
    if (searchInput && searchInput.value === "") {
      toast.error("Field must be filled", {
        duration: 1500,
        position: "top-center",
      });
      return;
    }

    if (searchInput) {
      submit(searchInput.value);
      form.reset();
    }
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
        <Toaster />
      </div>
    </form>
  );
};

export default SearchBar;
