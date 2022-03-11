import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KcEfeAcDRU3BG7QsfeJzSmH9EGPlggXZVzPaRe8J815VVbESpmAf7ZcN4PktJPg5zKX67TLLmZOoPhLyiix5dsS00vzBc0p3Y';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing Ltd.' 
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton;
