import css from "./LoadMoreBtn.module.css";


const LoadMoreBtn = ({loadmore}) => {
  return (
    <button onClick={loadmore} className={css.loadBtn}>Load more...</button>
  )
}

export default LoadMoreBtn