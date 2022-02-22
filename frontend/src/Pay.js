import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        return () => {
            effect
        };
    }, [input])

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