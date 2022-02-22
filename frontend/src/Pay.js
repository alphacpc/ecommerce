import axios from 'axios';
import React, {useEffect, useState} from 'react';
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51KW3piFuqorn9sShE9aJhnczCHgoCHGjva2HB0bddUgLTt3t288eULuja32IVFBKK28qcakVPVhPGknyvPSPVCGA00luH6OusI"

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async ()=>{
            try{
                const res = await axios.post("http://localhost:5050/api/checkout/payment", {
                    tokenId : stripeToken.id,
                    amount: 2000
                })
                console.log(res)
            }
            catch(err){
                console.log(err)
            }
        }

        stripeToken && makeRequest()
    }, [stripeToken])

  return (
    <StripeCheckout 
        name="phal shop"
        shippingAddress
        billingAddress
        description="Total est de 100$"
        amout={100}
        token={onToken}
        stripeKey={KEY}
        >
        <button style={{ background:'green', padding:"20px", fontSize: "40px"}}>Pay</button>
    </StripeCheckout>
  )
}

export default Pay