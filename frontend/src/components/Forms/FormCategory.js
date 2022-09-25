import React from 'react'

const FormCategory = () => {
  return (
    <form id="formCategory" className='form'>
        <div className="divFormGroup">
            <label htmlFor="">Nom de la catégorie <span className="required">*</span></label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Image de la catégorie <span className="required">*</span></label>
            <input type="file" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Tag de la catégorie <span className="required">*</span></label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Description de la catégorie</label>
            <textarea placeholder='Message' name="" id=""></textarea>
        </div>

        <p> <span className="required">*</span> Champs requis !</p>

        <button>Enregistrer</button>
    </form>
  )
}

export default FormCategory