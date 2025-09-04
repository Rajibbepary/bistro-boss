import Swal from 'sweetalert2'
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';

const FoodCard = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
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
    <div className="bg-white relative rounded-2xl pb-4 overflow-hidden border border-gray-500/30">
      <img className="w-full object-cover object-top" src={image} alt={name} />
      <p className="bg-slate-950 text-white absolute right-0 top-0 mr-4 mt-4 px-3 py-1 rounded-md">
        ${price}
      </p>

      <div className="flex flex-col items-center text-center p-4 space-y-2">
        <p className="font-medium mt-3 text-xl">{name}</p>
        <p className="text-gray-500 text-sm">{recipe}</p>

          <div className="relative group border-b-2 overflow-hidden p-0.5 h-10 w-30 rounded-md active:scale-100 hover:scale-105 transition-all duration-300">
            <button onClick={handleAddToCart} className="text-black text-sm font-semibold bg-gradient-to-t h-full w-full rounded">
              Add To Cart
            </button>
            <div className="absolute -bottom-12 group-hover:-bottom-10 transition-all duration-200 left-1/2 -z-10 -translate-x-1/2 blur size-14 rounded-full bg-black/40"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
