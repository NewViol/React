const PostAddForm=({handlerSubmit,handlerChange, text})=>{
    return (
        <form className="d-flex" onSubmit={handlerSubmit}>
            <input type='text' placeholder="add here post"
            className="form-control"
            onChange={handlerChange} value={text}/>

            <input type='submit' value='Add post' className="btn btn-secondary"/>
        </form>
    );
}

export default PostAddForm;