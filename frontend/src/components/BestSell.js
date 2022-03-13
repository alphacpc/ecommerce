import React from 'react';
import "./../assets/styles/BestSell.css";
import { products } from "./../Datas";
import { ShoppingCartOutlined, SearchOutlined, HeartOutlined} from "@ant-design/icons";



const BestSell = () => {

  const bestSell = products['best-sell'];

  return (
    <div className="bestContainer">
      <h2>Meilleures ventes</h2>
      <hr id="barBest"/>
      <div className="divBests">
        {
          bestSell.map((product, index) => (
            <div className="bestItem" key={index}>
              <img className={`${product.classname}`} src={product.img} alt={`${product.title}`}/>
              <div className="divIcons">
                <SearchOutlined className="loop"/>
                <HeartOutlined className="heart"/>
                <ShoppingCartOutlined className="cart"/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BestSell