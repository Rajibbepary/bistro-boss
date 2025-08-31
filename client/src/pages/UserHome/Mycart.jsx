import { toast } from "react-toastify";
import SectionTitel from "../../components/SectionTitel/SectionTitel";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Mycart = () => {
    const [cart, refetch] = useCart()
     const axiosSecure = useAxiosSecure()
    const totalprice = cart.reduce((total, item) => total + item.price, 0);
    const handleDelete = id => {

       axiosSecure.delete(`/carts/${id}`)
       .then(res =>{
        if(res.data.deletedCount > 0){
            refetch()
            toast.success('Deleted Success')
        }
       })
    }
    return (
        <div className="w-11/12 mx-auto">
            <SectionTitel subHeading={'My Cart'} heading={'WANNA ADD MORE?'}/>
            <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <div className="flex justify-between items-center mb-4">
                     <h2 className="text-lg font-medium">TOTAL ORDERS: {cart?.length}</h2>
                      <h2 className="text-lg font-medium">TOTAL PRICE: {totalprice}</h2>
                    
                    <Link to='/dashboard/payment'>
                      <button className="bg-orange-400 w-[60px] h-[40px] rounded-md mr-16">PAY</button>
                    </Link>
                </div>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">IMAGE</th>
                                <th className="px-4 py-3 font-semibold truncate hidden md:block">PRICE</th>
                                <th className="px-4 py-3 font-semibold truncate">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {cart.map((item, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded overflow-hidden">
                                            <img src={item.image} alt="Product" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{item.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{item.price}</td>
                                    <td className="px-8 ">
                                        <button onClick={()=>handleDelete(item._id)}><RiDeleteBin5Fill className="text-red-600 text-2xl" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Mycart;