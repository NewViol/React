import PostListItem from "../post-list-item"

const PostList=({posts})=>{
    const components = posts.map(item=>{
        const {id, ...rest}=item;
        return (
            <PostListItem  key={id} {...rest}/>
        )
    })
    return(
        <ul>
           {components}
        </ul>
    )
}
export default PostList;