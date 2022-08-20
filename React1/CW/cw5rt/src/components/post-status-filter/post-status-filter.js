const PostStatusFilter = ({onChangeFilter, filter}) => {
  const masOfButtons=[
    {name: "All", key:"all"},
    {name:'Likes', key:"likes"}
  ]
  const buttons = masOfButtons.map(({name, key})=>{
    const activeButton = filter===key;
    const classes=activeButton?'btn btn-info':'btn btn-light'
    return (
      <button className={classes} key={key}
      onClick={()=>onChangeFilter(key)}>{name}</button>
    )
  })

    return (
      <div className="btn-group">
        {/* <button className="btn btn-info">
          All
        </button>
        <button className="btn btn-light">
          Likes
        </button> */}
        {buttons}
      </div> 
     
    );
  };
  export default PostStatusFilter;
  