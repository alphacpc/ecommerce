import React from 'react'

const ProductCart = ({product, index}) => {
  return (
    <div key={index} className='divCartItem'>
        <div className="divImageInfo">
            <div className='divImage'>
                <img src={product.img} alt={`${product.title}`}/>
            </div>
            <div className='divInfos'>
                <h3>{product.title}</h3>
                <p>{product.marque}</p>
                <p>{product.desc}</p>
            </div>
        </div>
        <div className="divPriceQuantity">
            <div className='productQauntity'>
              <span className="action">-</span>
              <span className="value">1</span>
              <span className="action">+</span>
            </div>
            <h4>{product.prix} FCFA</h4>
        </div>
    </div>
  )
}

export default ProductCart