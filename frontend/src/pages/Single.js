import React, {useState} from 'react';
import styled from "styled-components";
import Navbar from './../components/Navbar';
import Footer from '../components/Footer';
import "./../assets/styles/Single.css";
import {products} from "./../Datas"


const FilterColor = styled.div`
  padding: 20px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
`;



const Single = () => {

  const [product] = useState(products["best-sell"][4]);
  const [quantity, setQuantity] = useState(1);

  console.log(product)

  return (
    <div className="singleContainer">
      <Navbar/>

      <div className="singleBody">
        <div className="divProductImage">
          <img src={product.img} alt={product.title}/>
        </div>

        <div className="divProductInfo">
          <h1>{product.title}</h1>
          {product.marque && <h2>Marque {product.marque}</h2>}
          <p>{product.descLong}</p>
          
          <div>
            <h2>{product.prix} FCFA</h2>
            <div className="productQauntity">
              <span>-</span>
              <span>{quantity}</span>
              <span>+</span>
            </div>
          </div>

          <div className="colorFilters">
            <h2>Couleur(s)</h2>
            <div className="divFilterColors">
              {
                product.colors.map((color,index) => (
                  <FilterColor color={color} key={index}/>
                ))
              }
            </div>
          </div>

          <button>Ajouter au panier</button>

        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default Single