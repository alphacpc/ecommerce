import React from 'react';
import "./../assets/styles/BestSell.css";
import { products } from "./../Datas";
import {ShoppingOutlined, ShoppingCartOutlined, SearchOutlined, HeartOutlined} from "@ant-design/icons";



const BestSell = () => {

  const bestSell = products['best-sell'];

  return (
    <div className="bestContainer">
      <h2>Meilleures ventes</h2>
      <div className="divBests">
        {
          bestSell.map((product, index) => (
            <div className="bestItem">
              <img className={`${product.classname}`} src={product.img} alt={`${product.title}`}/>
              <div className="divIcons">
                <SearchOutlined color=''/>
                <HeartOutlined/>
                <ShoppingCartOutlined/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BestSell