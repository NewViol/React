const SearchPanel=({searchText, onChangeText})=>{
    return (
        <input type='text' placeholder="type here" className="form-control"
        value={searchText}
        onChange={onChangeText}/>
    )
}
export default SearchPanel;