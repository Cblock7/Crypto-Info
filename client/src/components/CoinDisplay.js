import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import topTen from "../utils/API";
// import API from "../utils/API";

class CoinDisplay extends Component {
  // const [] = useState();
  useState = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchCoin("");
  }

  searchCoin = () => {
    topTen()
      .then((res) => this.setState({ results: res.data.data }))
      .catch((err) => console.log(err));
    console.log(res.data.data);
  };

  render() {
    return (
      <div>
        <Card></Card>

        <h3>Coins are still loading!</h3>
      </div>
    );
  }
}

export default CoinDisplay;
