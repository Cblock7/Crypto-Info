import React from "react";


const style = {
  card: {
    width: "28rem"


  }


}


function Card(props) {
  return (
    <div style={style.card}>
   
    <ul className="list-group">
      {props.results.map((result) => (
      <li className="card" key={result.id}>
         <img src={result.image} className="card-img-top" alt={result.name}/>
         <div className="card-body">
          <h5 className="card-title">{result.name}</h5>
          <p className="card-text">{result.current_price}</p>
          <a href="www.cnn.com" className="btn btn-primary">Add to Favorites</a>
         </div>
       </li>

)
)
      }
    </ul>
    </div>
  );
 
}

export default Card;