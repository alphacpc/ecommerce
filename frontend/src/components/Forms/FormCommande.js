import axios from 'axios'
import React, {useState} from 'react'


const FormCommande = () => {

    const [dateOrder, setDateOrder ] = useState("")
    const [statusOrder, setStatusOrder ] = useState("encours")
    const [payementOrder, setPayementOrder ] = useState("")
    const [productsOrders, setProductsOrders ] = useState([])
    const [amountOrder, setAmountOrder ] = useState(0)
    const [fullnameUserOrder, setFullnameUserOrder ] = useState("")
    const [addressOrder, setAddressOrder ] = useState("")
    const [isSigned, setisSigned ] = useState("")
    const [phoneUserOrder, setPhoneUserOrder ] = useState("")
    const [emailUserOrder, setEmailUserOrder ] = useState("")

    const handleSubmitForm = async(e) => {
        e.preventDefault()

        setisSigned(
            Object.values(e.target.querySelectorAll("input[name='signed']")).filter(element => element.checked === true)[0].getAttribute("content")
        )        

        const newOrder = {
            dateOrder, statusOrder, payementOrder, productsOrders: [
                {
                    name: productsOrders,
                    quantity: 1
                }
            ],
            amountOrder, fullnameUserOrder, addressOrder, isSigned,
            phoneUserOrder, emailUserOrder
        }
        newOrder.isSigned = isSigned

        try{
            await axios.post("/orders/", newOrder);
        }
        catch(err){
            console.log(err)
        }

    }



    return (
        <form id="formProduct" className="form" onSubmit={handleSubmitForm}>
            <div className="divFormGroup">
                <label htmlFor="">Date de la commande <span className="required">*</span></label>
                <input type="date" onChange={(e) => setDateOrder(e.target.value) } />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Etat de la commande <span className="required">*</span></label>
                <select onChange={ (e) => setStatusOrder(e.target.value) } >
                    <option value="">Veuillez choisir l'état de la commande</option>
                    <option value="encours">En cours</option>
                    <option value="traite">traité</option>
                    <option value="annule">Annulé</option>
                </select>
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Moyen de payement <span className="required">*</span></label>
                <select onChange={ (e) => setPayementOrder(e.target.value) }>
                    <option value="">Veuillez choisir un moyen de payement</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="american_express">American Express</option>
                    <option value="discover">Discover</option>
                </select>
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Produit(s) acheté(s)</label>
                <input type="text" placeholder="Jean" onChange={ (e) => setProductsOrders(e.target.value)} />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Montant <span className="required">*</span></label>
                <input type="number" placeholder="15000" min={0} onChange={ (e) => setAmountOrder(e.target.value)}/>
            </div>        

            <div className="divFormGroup">
                <label htmlFor="">Nom complet du client <span className="required">*</span></label>
                <input type="text" placeholder="Jean" onChange={ (e) => setFullnameUserOrder(e.target.value)} />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Adresse du client</label>
                <input type="text" placeholder="Jean" onChange={ (e) => setAddressOrder(e.target.value) } />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Client déjà inscrit ? <span className="required">*</span></label>
                <div className='divRadio'>
                    <div>
                        <input type="radio" id="signed" content="true" name="signed"/>
                        <label htmlFor="signed"> Oui, c'est un utilisateur de la platforme</label>
                    </div>
                    <div>
                        <input type="radio" content="false" id="signup" name="signed" />
                        <label htmlFor="signup"> Non, c'est un nouveau client</label>
                    </div>
                </div>
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Numero de Téléphone du client <span className="required">*</span></label>
                <input type="text" placeholder="Jean" onChange={ (e) => setPhoneUserOrder(e.target.value)} />
            </div>

            <div className="divFormGroup">
                <label htmlFor="">Adresse email du client</label>
                <input type="text" placeholder="Jean" onChange={ (e) => setEmailUserOrder(e.target.value)} />
            </div>

            <p> <span className="required">*</span> Champs requis !</p>

            <button>Enregistrer</button>
        </form>
    )
}

export default FormCommande