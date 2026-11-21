import Swal from 'sweetalert2'
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';
import { FaShoppingCart, FaEye } from "react-icons/fa";
const FoodCard = ({ item }) => {
  const { image, name, price, _id } = item;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart();

  const handleAddToCart = () =>{
    //console.log(food, user?.email)
     if( user && user.email){
      //send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          if(res.data.insertedId){
          //   
          toast.success(`${name} Added to cart successfully!`)
          }
        })
        //refetch cart to update the cart item 
        refetch()
     }
     else{
      Swal.fire({
        title: "You are LogIn?",
        text: "please login add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}})
  }
});
     }
  }


  return (
  <div className="group bg-white relative rounded-xl overflow-hidden border border-gray-200/70 shadow-sm hover:shadow-lg transition-all duration-300">

    {/* Food Image */}
    <div className="relative overflow-hidden">
      <img
        className="w-full h-[200px]  object-cover object-center group-hover:scale-105 transition-transform duration-500"
        src={image}
        alt={name}
      />
    </div>

    {/* Card Content */}
    <div className="p-5 flex flex-col gap-3">

      {/* Food Name */}
      <h3 className="text-2xl text-left md:text-2xl font-normal text-[#D93832] line-clamp-1">
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
          <FaShoppingCart className='w-3' />
          <span className='text-sm'>Add to cart</span>
        </button>
 
        {/* Quick View */}
        <button
          className="flex items-center gap-2 text-[#D93832] text-base hover:text-[#B92424] hover:scale-105 transition-all duration-300"
        >
          <FaEye className='w-3' />
          <span className='text-sm'>Quick View</span>
        </button>

      </div>
    </div>
  </div>
);
};

export default FoodCard;
