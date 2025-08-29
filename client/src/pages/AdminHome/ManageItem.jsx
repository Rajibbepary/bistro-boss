
import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPenToSquare } from "react-icons/fa6";
import useMenu from "../../hooks/useMenu";
import Swal from 'sweetalert2'
import useAxiosSecure from './../../hooks/useAxiosSecure';
const ManageItem = () => {
     
     const {menu, refetch} = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then( async(result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menu/${item._id}`)
            console.log(res.data)
            if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${item.name} has been deleted`,
                showConfirmButton: false,
                timer: 1500
                });
            }
            
        }
        });
       
    }
    return (
        <div className="w-11/12 mx-auto">
            <SectionTitel subHeading={'Hurry Up!'} heading={'manage all item'}/>
            <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <div className="flex justify-between items-center mb-4">
                     <h2 className="text-lg font-medium">TOTAL ITEM: {menu?.length}</h2>
                      
                </div>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-white/80 text-sm text-left bg-[#D1A054]">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">IMAGE</th>
                                 <th className="px-4 py-3 font-semibold truncate">NAME</th>
                                <th className="px-4 py-3 font-semibold truncate">PRICE</th>
                                <th className="px-4 py-3 font-semibold truncate">ACTION</th>
                                 <th className="px-4 py-3 font-semibold truncate">ACTION</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {menu.map((item, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded overflow-hidden">
                                            <img src={item.image} alt="Product" className="w-16" />
                                        </div>
                                
                                    </td>
                                     <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">{item.price}</td>
                                    <td className="px-8 ">
                                        <button  className="bg-[#D1A054] p-2 rounded-sm">< FaPenToSquare className=" text-white/80"/></button>
                                    </td>
                                    <td className="px-8 ">
                                        <button className="p-2 rounded-sm bg-[#B91C1C]" onClick={() => handleDelete(item)}><RiDeleteBinLine className="text-white/80 " /></button>
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

export default ManageItem;