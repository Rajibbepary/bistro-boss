import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const stripe = useStripe();
  const elements = useElements();

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
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
                    bg-gradient-to-br from-indigo-50 to-indigo-100 
                    dark:from-gray-900 dark:to-gray-800 px-4 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-white dark:bg-gray-900 
                   shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
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
                    color: '#1f2937', // gray-800
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
            disabled={!stripe}
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
        </form>
      </motion.div>
    </div>
  );
};

export default CheckoutForm;
