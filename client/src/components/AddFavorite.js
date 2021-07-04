import { useMutation } from "@apollo/client";
import React from "react";
import "../styles/Card.css";
import Card from "./Card"
import { useState } from "react"
import { ADD_COIN } from "../utils/mutations";

const AddToFavorites = () => {

    // const [coinState, setCoinState] = useState({
    //   name: '',
    // });
  
    const [addCoin, { error }] = useMutation(ADD_COIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
    
  
    try {
      const { data } = addCoin({
        // variables: { coin },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  <Card />
};

export default AddToFavorites;
