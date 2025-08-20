
import SectionTitel from '../../components/SectionTitel/SectionTitel';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './../../hooks/useAxiosSecure';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from 'sweetalert2'
const AllUsers = () => {
const axiosSecure = useAxiosSecure();
    const{data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleDeleteuser = user =>{
        Swal.fire({
  title: "Are you sure?",
  text: `${user.name}`,
  //icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {


    axiosSecure.delete(`/users/${user._id}`)
        .then(res=> {
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            }
        })
    
  }
});
    }

    return (
        <div className='w-11/12 mx-auto'>
            <SectionTitel subHeading={'How many??'} heading={'Manage All users'}/>
            <div className="flex-1 py-10 flex flex-col justify-between bg-[#FFFFFF] p-4">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium uppercase font-Cinzel">All Users: {users.length}</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-r-sm rounded-l-sm bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-white/90 text-sm text-left bg-[#D1A054]">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate font-Cinzel"></th>
                                <th className="px-4 py-3 font-semibold truncate font-Cinzel">Name</th>
                                <th className="px-4 py-3 font-semibold truncate font-Cinzel hidden md:block">Email</th>
                                <th className="px-4 py-3 font-semibold truncate font-Cinzel">Role</th>
                                <th className="px-4 py-3 font-semibold truncate font-Cinzel">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {users.map((user, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                   <td className="px-4 py-3">{index + 1}</td>
                                    <td className="px-4 py-3">{user.name}</td>
                                    <td className="px-4 py-3 max-sm:hidden">{user.email}</td>
                                     <td className="px-4 py-3 max-sm:hidden"><FaUsers  className='bg-[#D1A054] text-white text-2xl p-1 rounded-sm'/></td>
                                      <td className="px-4 py-3 max-sm:hidden"> <button  onClick={()=>handleDeleteuser(user)}><RiDeleteBin6Line className='bg-[#B91C1C] text-white text-2xl p-1 rounded-sm'/></button></td>
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

export default AllUsers;