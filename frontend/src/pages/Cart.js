import React from 'react'
import {Link} from 'react-router-dom'

import "./../assets/styles/Cart.css"

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductCart from '../components/ProductCart'

import { HeartOutlined } from "@ant-design/icons";

import { products } from "./../Datas";



const Cart = () => {
  

  return (
    <div className="cartContainer">
      <Navbar/>

      <div id="message">
        <p>loem ipsum</p>
      </div>

      <div className="divContentCart">
        
        <div className="divTop">
          <Link to="/boutique">Poursuivre les achats</Link>
          <div>
            <p><span id="panier">Mon panier</span><sup>(2)</sup></p>
            <p><HeartOutlined/><sup>2</sup></p>
          </div>
          <Link to="/">Passer la commande</Link>
        </div>


        <div className="divFlexCart">
          <div className="divCartItems">
            {
              products['best-sell'].slice(0,4).map((product,index) => 
                <ProductCart product={product} key={index} index={index}/>
              )
            }
            
            
          </div>

          <div className="divCartPrices">
            <h2>Résumé de la commande</h2>
          </div>
        </div>

      </div>


      <Footer/>
    </div>
  )
}

export default Cart