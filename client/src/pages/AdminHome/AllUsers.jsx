
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

const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
      //  console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch()
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500
});
        }
    })
}



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
       <div className="w-11/12 mx-auto">
  <SectionTitel subHeading={'How many??'} heading={'Manage All users'} />
  <div className="flex-1 py-6 flex flex-col justify-between bg-white p-4 rounded-lg shadow">
    <div className="w-full p-2 md:p-6">
      <h2 className="pb-4 text-lg md:text-xl font-semibold uppercase font-Cinzel">
        All Users: {users.length}
      </h2>

      {/* Responsive Table Wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] md:table-auto table-fixed w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="text-white text-sm md:text-base bg-[#D1A054]">
            <tr>
              <th className="px-4 py-3 font-semibold font-Cinzel text-left w-12">#</th>
              <th className="px-4 py-3 font-semibold font-Cinzel text-left">Name</th>
              <th className="px-4 py-3 font-semibold font-Cinzel text-left">Email</th>
              <th className="px-4 py-3 font-semibold font-Cinzel text-left">Role</th>
              <th className="px-4 py-3 font-semibold font-Cinzel text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base text-gray-600">
            {users.map((user, index) => (
              <tr key={index} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3 break-words">{user.email}</td>
                <td className="px-4 py-3">
                  {user.role === 'admin' ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="p-1 bg-[#D1A054] text-white rounded-md hover:bg-[#b57d36] transition"
                    >
                      <FaUsers className="text-xl" />
                    </button>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDeleteuser(user)}
                    className="p-1 bg-[#B91C1C] text-white rounded-md hover:bg-red-700 transition"
                  >
                    <RiDeleteBin6Line className="text-xl" />
                  </button>
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

export default AllUsers;