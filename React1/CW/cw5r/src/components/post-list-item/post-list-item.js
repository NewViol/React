import { useState } from "react";
import "./post-list-item.css";

let classes = "d-flex justify-content-between post-list-item"

const PostListItem = ({label}) => {
  const [important, setImportant]=useState(false);
  if(important) classes+=' important';

  const onImportant=()=>{
    setImportant(value=>!value);
  }
  return (
    <li className={classes}>
      <span>{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-star" onClick={onImportant}>
          <i className="fa fa-star" />
        </button>
        <button className="btn btn-trash">
          <i className="fa fa-trash-o" />
        </button>
        <i className="fa fa-heart heart"></i>
      </div>
    </li>
  );
};
export default PostListItem;
