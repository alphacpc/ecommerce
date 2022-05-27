import React from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './../assets/styles/checkout.css'
import { products } from "./../Datas";


const checkout = () => {
  return (
    <div className="divCheckoutContainer">
        
        <Navbar/>

            <div className="divContentOrder">
                
                <div className="orders">
                    <h2>Résumé de la commande</h2>
                    <div className="orderProducts">
                        {
                            [1,3,2,1].map((el, i) => {
                                return <div className="orderProductItem" key={i}>
                                    <div className='productImage'>
                                        <img src={ products['best-sell'][0].img} alt="" />
                                    </div>
                                    <div className='productSommary'>
                                        <div>
                                            <h3>{ products['best-sell'][0].title}</h3>
                                            <h4>{ products['best-sell'][0].marque}</h4>
                                            <p>{ products['best-sell'][0].desc}</p>
                                        </div>
                                        <div className='price'>
                                            <span className='unitaire'>{ products['best-sell'][0].prix} FCFA</span>
                                            <span className='quantity'> X 1</span>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                </div>
                <div className="method-payment">
                    <h2>payement</h2>
                </div>
                
            </div>

        <Footer/>
    
    </div>
  )
}

export default checkout