import axios from 'axios'
import React, {useState} from 'react'
import {Link} from "react-router-dom";


const ProductForm = () => {

    const [productTitle, setProductTitle] = useState("")
    const [productImg, setProductImg] = useState(null)
    const [productMarque, setProductMarque] = useState("")
    const [productCat, setProductCat] = useState("")
    const [productPrice, setProductPrice] = useState(1000)
    const [productPricePromo, setProductPricePromo] = useState(1000)
    const [productDescShort, setProductDescShort] = useState("")
    const [productDescLong, setProductDescLong] = useState("")
    const [productQuantity, setProductQuantity] = useState(1)

    const handleSubmitFormProduct = async(e) => {
        e.preventDefault();
        
        let newProduct = {productTitle, productCat, productMarque,
            productPrice, productPricePromo, productDescShort, 
            productDescLong, productQuantity 
        }
        

        if(productImg){
            newProduct.productImg = Date.now() + productImg.name
        }

        try{
            
            const res = await axios.post("/products/", newProduct);
            console.log("value de res => ", res)
            
        }
        catch(err){
            console.log(err)
        }

        console.log("Valeur du nouveau produit => ",newProduct)

    }

  return (
    <form id="formProduct" className="form" onSubmit={handleSubmitFormProduct} method="post">
        <div className="divFormGroup">
            <label htmlFor="productTitle">Nom du produit <span className="required">*</span></label>
            <input type="text" name="productTitle" id="productTitle" value={productTitle} onChange={(e) => setProductTitle(e.target.value)} placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="productImg">Image du produit <span className="required">*</span></label>
            <input type="file" name="productImg" id="productImg"  onChange={(e) => setProductImg(e.target.files[0])} placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="productMarque">Marque du produit</label>
            <input type="text" name="productMarque" id="productMarque" value={productMarque} onChange={(e) => setProductMarque(e.target.value)} placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="productCat">Catégorie du produit <span className="required">*</span></label>
            <select name="productCat" id="productCat" onChange={(e) => setProductCat(e.target.value)}>
                <option value="">Choisir une catégorie</option>
                <option value="T-shirt">T-shirt</option>
                <option value="Jean">Jean</option>
                <option value="Pull-over">Pull-over</option>
            </select>
        </div>

        <div className="divFormGroup">
            <label htmlFor="productPrice">Prix du produit <span className="required">*</span></label>
            <input type="number" name="productPrice" id="productPrice" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} placeholder="15000" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="productPricePromo">Prix promo du produit</label>
            <input type="number" name="productPricePromo" id="productPricePromo" value={productPricePromo} onChange={(e) => setProductPricePromo(e.target.value)} placeholder="12000" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="productDescShort">Description courte <span className="required">*</span></label>
            <input type="text" name="productDescShort" id="productDescShort" value={productDescShort} onChange={(e) => setProductDescShort(e.target.value)} placeholder="Lorem ipsum" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="productDescLong">Description longue</label>
            <textarea placeholder='Message' name="productDescLong" id="productDescLong" value={productDescLong} onChange={(e) => setProductDescLong(e.target.value)}></textarea>
        </div>

        <div className="divFormGroup">
            <label htmlFor="productQuantity">Quantité en Stock <span className="required">*</span></label>
            <input type="number" name="productQuantity" id="productQuantity" value={productQuantity} onChange={(e) => setProductQuantity(e.target.value)} placeholder="15" min={1} max={20}/>
        </div>

        <p> <span className="required">*</span> Champs requis !</p>

        <button type="submit">Enregistrer</button>
    </form>
  )
}

export default ProductForm