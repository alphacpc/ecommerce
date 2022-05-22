import React from 'react';
import { Link } from "react-router-dom";

import { ShoppingCartOutlined, SearchOutlined, HeartOutlined} from "@ant-design/icons";


const ProductItems = ({product, ind}) => {
  return (
    <div className="bestItem" key={ind}>
        <img className={`${product.classname}`} src={product.img} alt={`${product.title}`}/>
        <div className="divIcons">
            <Link to={`/detail/${product.title}`}>
                <SearchOutlined className="loop"/>
            </Link>
            <HeartOutlined className="heart"/>
            <ShoppingCartOutlined className="cart"/>
        </div>
    </div>
  )
}

export default ProductItems;