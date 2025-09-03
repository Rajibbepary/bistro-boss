import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import useCart from './../../hooks/useCart';
import useAuth from '../../hooks/useAuth';

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [success, setSuccess] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const {user} = useAuth()
  const [cart] = useCart()
  const totalPrice = cart.reduce( (total, item) => total + item.price, 0)


  useEffect( ()=>{
      axiosSecure.post('/creat-payment-intent', {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosSecure, totalPrice])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('payment error', error);
      setError(error.message);
      setSuccess('');
    } else {
      console.log('payment method', paymentMethod);
      setError('');
      setSuccess('✅ Payment method created successfully!');
    }


  //confirm payment
  const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'anonymous',
        name: user?.displayName || 'anonymous'
      }
    }
  })
  if(confirmError){
    console.log(confirmError)
  }else{
    console.log('payment intent', paymentIntent)
    if(paymentIntent.status === 'succeeded')
      console.log('transaction id', paymentIntent.id)
    setTransactionId(paymentIntent.id)

    //now save the payment in the database
    const payment = {
      email: user.email,
      price: totalPrice,
      transactionId: paymentIntent.id,
      date: new Date(),
      cartIds: cart.map(item => item._id),
      menuItemIds: cart.map(item => item.menuId),
      status: 'pending'
    }
   const res = await axiosSecure.post('/payment', payment)
   console.log(res);

  }
  };

  return (
    <div className="flex items-center justify-center min-h-screen rounded-sm
                    bg-gradient-to-br from-indigo-200 to-indigo-100 
                    dark:from-gray-900 dark:to-gray-600 px-4 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white dark:bg-gray-900 
                   shadow-lg rounded-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-6">
          Secure Payment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Card Input */}
          <motion.div
            whileFocus={{ scale: 1.02 }}
            className="p-3 border border-gray-300 dark:border-gray-600 
                       rounded-lg focus-within:ring-2 focus-within:ring-indigo-400"
          >
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#9ca3af', // gray-800
                    '::placeholder': {
                      color: '#9ca3af', // gray-400
                    },
                  },
                  invalid: {
                    color: '#ef4444', // red-500
                  },
                },
              }}
            />
          </motion.div>

          {/* Pay Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={!stripe || !clientSecret}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 
                       transition text-white font-medium shadow-md"
          >
            Pay Now
          </motion.button>

          {/* Animated Messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-red-600 dark:text-red-400 text-sm text-center font-medium"
              >
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-green-600 dark:text-green-400 text-sm text-center font-medium"
              >
                {success}
              </motion.p>
            )}
          </AnimatePresence>
          {transactionId && <p className='text-green-500'>Your transaction id: {transactionId}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default CheckoutForm;
