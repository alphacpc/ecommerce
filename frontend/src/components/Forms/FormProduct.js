import React from 'react'

const ProductForm = () => {
  return (
    <form id="formProduct" className="form">
        <div className="divFormGroup">
            <label htmlFor="">Nom du produit <span className="required">*</span></label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Image du produit <span className="required">*</span></label>
            <input type="file" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Marque du produit</label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Catégorie du produit <span className="required">*</span></label>
            <select name="" id="">
                <option value="">Choisir une catégorie</option>
                <option value="">T-shirt</option>
                <option value="">Jean</option>
                <option value="">Pull-over</option>
            </select>
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Prix du produit <span className="required">*</span></label>
            <input type="number" placeholder="15000" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Prix promo du produit</label>
            <input type="number" placeholder="12000" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Description courte <span className="required">*</span></label>
            <input type="text" placeholder="Lorem ipsum" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Description longue</label>
            <textarea placeholder='Message' name="" id=""></textarea>
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Quantité en Stock <span className="required">*</span></label>
            <input type="number" placeholder="15" min={1} max={20}/>
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Gallerie</label>
            <input type="file" placeholder="Jean" />
        </div>

        <p> <span className="required">*</span> Champs requis !</p>

        <button>Enregistrer</button>
    </form>
  )
}

export default ProductForm