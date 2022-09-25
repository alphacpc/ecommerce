import React from 'react'

const FormCommande = () => {
  return (
    <form id="formProduct" className="form">
        <div className="divFormGroup">
            <label htmlFor="">Date du commande <span className="required">*</span></label>
            <input type="date" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Etat de la commande <span className="required">*</span></label>
            <select>
                <option value="">Veuillez choisir l'état de la commande</option>
                <option value="">En cours</option>
                <option value="">traité</option>
                <option value="">Annulé</option>
            </select>
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Moyen de payement <span className="required">*</span></label>
            <select>
                <option value="">Veuillez choisir un moyen de payement</option>
                <option value="">Visa</option>
                <option value="">Mastercard</option>
                <option value="">American Express</option>
                <option value="">Discover</option>
            </select>
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Produit(s) acheté(s)</label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Montant <span className="required">*</span></label>
            <input type="number" placeholder="15000" min={0}/>
        </div>        

        <div className="divFormGroup">
            <label htmlFor="">Nom complet du client <span className="required">*</span></label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Adresse du client</label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Client déjà inscrit ? <span className="required">*</span></label>
            <div className='divRadio'>
                <div>
                    <input type="radio" name="signed"/>
                    <label htmlFor=""> Oui, c'est un utilisateur de la platforme</label>
                </div>
                <div>
                    <input type="radio" name="signed" />
                    <label htmlFor=""> Non, c'est un nouveau client</label>
                </div>
            </div>
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Numero de Téléphone du client <span className="required">*</span></label>
            <input type="text" placeholder="Jean" />
        </div>

        <div className="divFormGroup">
            <label htmlFor="">Adresse email du client</label>
            <input type="text" placeholder="Jean" />
        </div>

        <p> <span className="required">*</span> Champs requis !</p>

        <button>Enregistrer</button>
    </form>
  )
}

export default FormCommande