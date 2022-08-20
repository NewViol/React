import AppHeader from "../app-header";
import PostList from "../post-list";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostAddForm from "../post-add-form";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState( [
    /* {label:'Learn React', id:1, important:true, like:false},
    {label:'Drink coffee', id:2, important:false, like:false},
    {label:'Rest', id:3, important:false, like:false} */
  ]);
 /*  const dopMas = JSON.parse(localStorage.getItem('data'));
     if (dopMas) {
    setData(dopMas); 
     } */
  //const dopMas = localStorage.getItem('data');
  //setData(dopMas);
  //if(localStorage.data) setData(localStorage.getItem(`data`));
   /* const dopMas = JSON.parse(localStorage.getItem('data'));
  if (dopMas) {
    setData(dopMas); 
  } */
  
  const allPosts=data.length;
  const liked = data.filter(item=>item.like===true).length;
  
   useEffect(()=>{
    
    localStorage.setItem('data', JSON.stringify(data));
    const dopMas = JSON.parse(localStorage.getItem('data'));
     if (dopMas) {
    setData(dopMas); 
     }
  }, [data]) 

  const onDelete=(id)=>{
    const index = data.findIndex(item=>item.id===id);
    const newArr = [...data.slice(0,index), ...data.slice(index+1)];
    setData(newArr);

  }
  const [text, setText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState('all');

  const onChangeFilter=(filter)=>{
    setFilter(filter);
  }

  const statusFilter=(mas)=>{
    if(filter==='all'){
      return mas;
    }
    return mas.filter(item=>item.like===true);
  
  }

  const onChangeText=(e)=>{
    setSearchText(e.target.value);  
  }

  const filterPost=()=>{
    if(searchText.length===0){
      return data;
    }
    return data.filter(item=>item.label.includes(searchText));
    }

    const visiblePosts = statusFilter(filterPost());

const handlerChange=(e)=>{
  setText(e.target.value);
}
const handlerSubmit=(e)=>{
  if(text.length!==0){
  e.preventDefault();
  const newItem={label:text, id:data.length+1, important:false, like:false}
  
  const newMas=[...data, newItem];
  setData(newMas);
  setText('');
  }
}

const ForImpAndLike=(dop,i)=>{
  const index = data.findIndex(item=>item.id===i);
  let changeItem;
  if(dop === 'important'){
   changeItem = {...data[index], important:!data[index].important};
  }
  else{
     changeItem = {...data[index], like:!data[index].like};
  }
  const newMas = [...data.slice(0,index), changeItem, ...data.slice(index+1)];
  setData(newMas);
}

const onImportant=(i)=>{
  ForImpAndLike('important',i);
}
const onLike=(i)=>{
  ForImpAndLike('like',i);
}
    return (
      <div className="App">
        <AppHeader allPosts={allPosts} like={liked}/>
        <div className="d-flex">
        <SearchPanel searchText={searchText} onChangeText={onChangeText}/>
        <PostStatusFilter onChangeFilter={onChangeFilter} filter={filter}/>
        </div>
        <PostList posts={visiblePosts}
         onDelete={onDelete}
         onImportant={onImportant}
         onLike={onLike}/>
        <PostAddForm handlerChange={handlerChange} handlerSubmit={handlerSubmit} text={text}/>
      </div>
    );
  }
  
export default App;