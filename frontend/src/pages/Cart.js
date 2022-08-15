import React from 'react'
import {Link} from 'react-router-dom'

import "./../assets/styles/Cart.css"

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductCart from '../components/ProductCart'

import { HeartOutlined } from "@ant-design/icons";

import { products } from "./../Datas";



const Cart = () => {
  
  window.scrollTo(0, 10);


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
            <h2>Résumé de la Commande</h2>
            <div>
              <div className="shipping-info">
                <h4>Sous total</h4>
                <span>100000 FCFA</span>
              </div>

              <div className="shipping-info">
                <h4>Taux des frais de livraison</h4>
                <span>1%</span>
              </div>

              <div className="shipping-info">
                <h4>Frais de livraison</h4>
                <span>1000 FCFA</span>
              </div>

              <div className="shipping-info total">
                <h4>Total</h4>
                <span>110000 FCFA</span>
              </div>
            </div>

            <div className="dinBtnCheckout">
              <Link to="/commande">Passer la commande</Link>
            </div>
          
          </div>
        </div>

      </div>


      <Footer/>
    </div>
  )
}

export default Cart