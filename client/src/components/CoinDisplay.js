// import React, { Component } from "react";
import React, { useState, useEffect, Component } from "react";
import topTen from "../utils/API";
import Card from "./Card";
// import API from "../utils/API";

const CoinDisplay = function() {
    const [coinlist, setCoinList] = useState({ results: [] });
//   useState = {
//     topTen: "",
//     results: [],
//   };

  useEffect(() => {
    searchCoin("");
  }, [])

  const searchCoin = (props) => {
    topTen()
      .then((res) => {
          
        // console.log(res.data)
        
        setCoinList({ results: res.data })}) 
      .catch((err) => console.log(err));
    console.log(props);
  };

  
    return (
      <div>
        {/* <Card></Card> */}
        <h3>Coins are still loading!</h3>
        <Card results={coinlist.results} />

      </div>
    );
  
}

export default CoinDisplay;
