import css from "./LoadMoreBtn.module.css";

interface ILoadMoreBtn {
  loadmore:()=>void;
}


const LoadMoreBtn = ({loadmore}:ILoadMoreBtn) => {
  return (
    <button onClick={loadmore} className={css.loadBtn}>Load more...</button>
  )
}

export default LoadMoreBtn