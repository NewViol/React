import PostListItem from "../post-list-item"

const PostList=({posts, onDelete, onImportant, onLike})=>{
    const components = posts.map(item=>{
        const {id, ...rest}=item;
        return (
            <PostListItem  key={id} {...rest} 
            onDelete={()=>onDelete(id)}
            onImportant={()=>onImportant(id)}
            onLike={()=>onLike(id)}/>

        )
    });
    return(
        <ul>
           {components}
        </ul>
    )
}
export default PostList;