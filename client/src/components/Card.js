import { useMutation } from "@apollo/client";
import React from "react";
import "../styles/Card.css";
import AddToFavorites from "./AddFavorite";

function Card(props) {
  return (
    <ul className="container-fluid" id="cardList">
      {props.results.map((result) => (
        <li className="card" key={result.id} id="card">
          <img src={result.image} className="card-img-top" alt={result.name} />
          <div className="card-body">
            <h5 className="card-title">{result.name}</h5>
            <p className="card-text"> $ {result.current_price}</p>
            <button
              className="btn btn-primary fontSize"
              onSubmit={AddToFavorites}
            >
              Add to Favorites
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Card;
