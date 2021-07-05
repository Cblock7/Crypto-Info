import React from "react";
import "../styles/Resources.css";
import desc1 from "../assets/images/1.png";
import desc2 from "../assets/images/2.png";
import desc3 from "../assets/images/3.png";
import desc4 from "../assets/images/4.png";
import desc5 from "../assets/images/5.png";
import desc6 from "../assets/images/6.png";
import desc7 from "../assets/images/7.png";
import desc8 from "../assets/images/8.png";
import desc9 from "../assets/images/9.png";
import desc10 from "../assets/images/10.png";

// Source for images: https://thecollegeinvestor.com/21245/top-10-bitcoin-crypto-investing-sites/

function Resources() {
  return (
    <div id="resources">
      <h2 id="resourceTitle">
        Good Applications for Starting Your Crypto Investment Journey{" "}
      </h2>
      <ol id="siteLinks">
        <img id="self" src={desc1} alt="desc_1" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://www.coinbase.com">
            Coinbase
          </a>
        </li>
        <img id="self" src={desc2} alt="desc_2" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://www.gemini.com">
            Gemini
          </a>
        </li>
        <img id="self" src={desc3} alt="desc_3" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://blockfi.com">
            BlockFi
          </a>
        </li>
        <img id="self" src={desc4} alt="desc_4" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://uphold.com/en-us">
            Uphold
          </a>
        </li>
        <img id="self" src={desc5} alt="desc_5" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://www.kraken.com">
            Kraken
          </a>
        </li>
        <img id="self" src={desc6} alt="desc_6" />
        <li className="siteLinkItem">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.etoro.com/en-us/"
          >
            Etoro
          </a>
        </li>
        <img id="self" src={desc7} alt="desc_7" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://bitcoinira.com">
            Bitcoinira
          </a>
        </li>
        <img id="self" src={desc8} alt="desc_8" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://crypto.com">
            Crypto
          </a>
        </li>
        <img id="self" src={desc9} alt="desc_9" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://www.binance.com/en">
            Binance
          </a>
        </li>
        <img id="self" src={desc10} alt="desc_10" />
        <li className="siteLinkItem">
          <a target="_blank" rel="noreferrer" href="https://www.hodlnaut.com">
            Hodlnaut
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Resources;
