 const Cards=(props)=>{
    return(
  <div className="card">
        <img alt="logo" src={props.images} />
        <h2>{props.title}</h2>
        <h3>{props.category}</h3>
        <h4>{props.price} $</h4>
      </div>
    )
  }
  export default Cards;