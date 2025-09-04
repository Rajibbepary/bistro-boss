
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const PayHistory = () => {
    const {user} = useAuth();
const axiosSecure = useAxiosSecure()
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    console.log(payments)
    return (
    
          <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">Total Payment: {payments.length}</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-gray-900 text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Email</th>
                                <th className="px-4 py-3 font-semibold truncate ">Total Price</th>
                                <th className="px-4 py-3 font-semibold truncate">Payment Date</th>
                                 <th className="px-4 py-3 font-semibold truncate">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {payments.map((payment, index) => (
                                <tr key={index} className="border-t border-gray-500/20">
                                    <td className="px-4 py-3">{payment.email}</td>
                                    <td className="px-4 py-3">{payment.price}</td>
                                    <td className="px-4 py-3">{payment.date}</td>
                                    <td className="px-4 py-3">{payment.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PayHistory;