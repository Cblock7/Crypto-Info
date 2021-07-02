import React from "react";

function Card(props) {
  return (
    <ul className="list-group">
      {props.results.map((result) => (
        <li className="list-group-item" key={result.id}>
            {result.name}
            {result.current_price}
          <img
            alt={result.name}
            className="img-fluid"
            src={result.image}
          />
        </li>
      ))}
    </ul>
  );
}

export default Card;

// return (
//     <div className = "card text-center">
//         <div className = "card-header">
//             <h2>{props.heading}</h2>
//         </div>
//         <div className = "card-body">{props.children}</div>
//     </div>
// );
