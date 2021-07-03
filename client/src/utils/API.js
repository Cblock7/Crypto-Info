// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

const REACT_APP_BASEURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2CBTC%2Cethereum%2CETH%2Clitecoin%2CLTC%2Ccardano%2CADA%2Cdogecoin%2CDOGE%2Cfilecoin%2CFIL%2Cbinance%2CBNB%2Ctether%2CUSDT%2Cripple%2CXRP%2Cstellar%2CXLM&order=market_cap_desc&per_page=100&page=1&sparkline=false";

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const topTen = () => axios.get(`${REACT_APP_BASEURL}`);

//   topTen();
//  console.log(topTen)

// Export an object with a "search" method that searches the Giphy API for the passed query
export default topTen;

// SEARCH IN API
// bitcoin,BTC,ethereum,ETH,litecoin,LTC,cardano,ADA,dogecoin,DOGE,filecoin,FIL,binance,BNB,tether,USDT,ripple,XRP
