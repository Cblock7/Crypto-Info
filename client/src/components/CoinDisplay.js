import React, { Component} from 'react';
import React, { useState, useEffect } from 'react';
import search from '../utils/API';
import API from '../utils/API';

class CoinDisplay extends Component {
    // const [] = useState();
    useState = {
        search: '',
        results: [],
    };

    componentDidMount() {
        this.searchCoin('');
    }

    searchCoin =(query) => {
        API.search(query)
        .then((res) => this.setState({ results: res.data}))
        .catch((err) => console.log(err));
    };

    render() {
        return (
            <div>
                <Card>


                </Card>

                <h3>Coins are still loading!</h3>
            </div>
        )
    }
}

export default CoinDisplay;
