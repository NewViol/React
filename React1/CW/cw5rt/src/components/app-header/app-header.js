const AppHeader=({allPosts, like})=>{
    return(
        <div className="d-flex justify-content-between">
            <h1>John Smith</h1>
            <h2>{allPosts} notes, {like} likes</h2>
        </div>
    )
}
export default AppHeader