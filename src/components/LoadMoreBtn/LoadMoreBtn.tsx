import css from "./LoadMoreBtn.module.css";

interface ILoadmore {
  loadmore:()=>void;
}

const LoadMoreBtn = ({loadmore}:ILoadmore) => {
  return (
    <button onClick={loadmore} className={css.loadBtn}>Load more...</button>
  )
}

export default LoadMoreBtn