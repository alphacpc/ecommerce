import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import {products} from "../../Datas"

import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';

import "../../assets/styles/Single.css";

const Single = () => {

  const [quantity, setQuantity] = useState(1);
  const product_ID = useHistory().location.pathname.split('/')[2]
  const [ product ] = useState(products["best-sell"][product_ID - 1])

  const handleAdd = () => {
    if(quantity <= 9){
      setQuantity(quantity => quantity += 1)
    }
  }

  const handleLess = () => {
    if(quantity !== 1){
      setQuantity(quantity => quantity -= 1)
    }
  }
  
  window.scrollTo(0, 10);


  return (
    <div className="singleContainer">
      <Navbar/>

      <div className="singleBody">
        <div className="divProductImage">
          <img src={product.img} alt={product.title}/>
        </div>

        <div className="divProductInfo">
          <h1>{product.title} {product.marque && <span>({product.marque})</span>}</h1>

          <p>{product.descLong}</p>
          
          <div className="divAmount">
            <h2>{product.prix} FCFA</h2>
            <div className="productQauntity">
              <span className="action" onClick={() => handleLess() }>-</span>
              <span className="value">{quantity}</span>
              <span className="action" onClick={() => handleAdd() }>+</span>
            </div>
          </div>

          <button id="btn-add-cart">Ajouter au panier</button>

        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Single;