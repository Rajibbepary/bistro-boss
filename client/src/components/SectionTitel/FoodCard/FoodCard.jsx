

import { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';
import { FaShoppingCart, FaEye, FaTimes } from "react-icons/fa";

const FoodCard = ({ item }) => {
  const { image, name, price, _id, recipe } = item;
console.log(item)
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  // Quick View Modal State
  const [showQuickView, setShowQuickView] = useState(false);

  // Add To Cart Function
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      };

      axiosSecure.post('/carts', cartItem)
        .then(res => {
          if (res.data.insertedId) {
            toast.success(`${name} Added to cart successfully!`);
            refetch();
          }
        })
        .catch(error => {
          console.error(error);
          toast.error('Failed to add item to cart!');
        });
    } else {
      Swal.fire({
        title: "You are not logged in!",
        text: "Please login to add items to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };

  return (
    <>
      {/* Food Card */}
      <div className="group bg-white relative rounded-xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-lg transition-all duration-300">

        {/* Food Image */}
        <div className="relative overflow-hidden">
          <img
            className="w-full h-[200px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
            src={image}
            alt={name}
          />
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col gap-3">

          {/* Food Name */}
          <h3 className="text-2xl text-left font-normal text-[#D93832] line-clamp-1">
            {name}
          </h3>

          {/* Price */}
          <p className="text-xl text-left text-gray-900 font-medium">
            ৳ {price}.00
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-2">

            {/* Add To Cart */}
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 text-[#D93832] text-base hover:text-[#B92424] hover:scale-105 transition-all duration-300"
            >
              <FaShoppingCart className="w-3" />
              <span className="text-sm">Add to cart</span>
            </button>

            {/* Quick View */}
            <button
              onClick={() => setShowQuickView(true)}
              className="flex items-center gap-2 text-[#D93832] text-base hover:text-[#B92424] hover:scale-105 transition-all duration-300"
            >
              <FaEye className="w-3" />
              <span className="text-sm">Quick View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {showQuickView && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowQuickView(false)}
        >
          <div
            className="relative w-full md:max-w-4xl max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setShowQuickView(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:bg-gray-100"
            >
              <FaTimes />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2">

              {/* Food Image */}
              <div className="h-64 md:h-full">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Food Information */}
              <div className="flex flex-col justify-center gap-4 p-6">

                {/* Name */}
                <h2 className="text-2xl font-semibold text-[#D93832]">
                  {name}
                </h2>

                {/* Price */}
                <p className="text-xl font-bold text-gray-800">
                  ৳ {price}.00
                </p>

                {/* Description */}
                <p className="leading-relaxed text-gray-600">
                  {recipe || 'No description available for this food item.'}
                </p>

                {/* Add To Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#D93832] py-3 text-white transition hover:bg-[#B92424]"
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>

                {/* Close Modal */}
                <button
                  onClick={() => setShowQuickView(false)}
                  className="rounded-lg border border-gray-300 py-3 text-gray-700 transition hover:bg-gray-100"
                >
                  Close
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodCard;
