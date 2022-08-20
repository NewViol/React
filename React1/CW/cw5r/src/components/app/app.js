import AppHeader from "../app-header";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostAddForm from "../post-add-form";

function App() {
  const data = [
    {label:'Learn React', id:1, important:true},
    {label:'Drink coffee', id:2, important:false},
    {label:'Rest', id:3, important:false}
  ]
    return (
      <div className="App">
        <AppHeader/>
        <div className="d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
        </div>
        <PostList posts={data}/>
        <PostAddForm/>
      </div>
    );
  }
  
  export default App;
  