const PostAddForm=()=>{
    return (
        <form>
            <input type='text' placeholder="add here post"
            className="form-control"/>

            <inout type='submit' value='Add post'
            className="btn btn-secondary"/>
        </form>
    );
}

export default PostAddForm;