
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
const stripe = useStripe();
const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
   if (!stripe || !elements) {
      
      return;
    }
   
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }


    }

    return (
        <div className='text-center'>
             <form onSubmit={handleSubmit}>
          <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
        <button type="submit" disabled={!stripe} className='w-40 py-3 rounded-sm active:scale-95 transition text-sm text-white bg-indigo-500'>
          Pay
        </button>
      </form>
        </div>
    );
};

export default CheckoutForm;