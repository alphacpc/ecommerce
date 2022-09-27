import React from 'react';
import "../../assets/styles/BestSell.css";
import { products } from "../../Datas";

import ProductItem from '../Products/ProductItem';





const BestSell = () => {

  const bestSell = products['best-sell'];

  return (
    <div className="bestContainer">
      <h2>Meilleures ventes</h2>
      <hr id="barBest"/>
      <div className="divBests">
        {
          bestSell.map((product, ind) => (
            <ProductItem ind={ind} key={ind} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default BestSell