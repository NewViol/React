
import "./post-list-item.css";



const PostListItem = ({label, onDelete,important,like, onImportant, onLike}) => {
  let classes = "d-flex justify-content-between post-list-item";  
  if(important) classes+=' important';
  if(like) classes+=' like';
 
  return (
    <li  className={classes}>
      <span onClick={onLike} >{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-star" onClick={onImportant}>
          <i className="fa fa-star" />
        </button>
        <button className="btn btn-trash"onClick={onDelete}>
          <i className="fa fa-trash-o" />
        </button>
        <i className="fa fa-heart heart" onClick={onLike} ></i>
      </div>
    </li>
  );
};
export default PostListItem;
