

import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { assets } from './../../assets/assets';
import PiChart from './piChart';
import BarCharts from './BarCharts';

const AddminHome = () => {


  const axisSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async()=>{
      const res = await axisSecure.get('/admin-stats');
      return res.data;
    }
  })

  const { data: chartData =[] } = useQuery({
    queryKey: ['order-stats'],
    queryFn: async()=>{
      const res = await axisSecure.get('/order-stats');
      return res.data;
    }
  })




    return (
        <div className="w-10/12 mx-auto my-4">
                    {/* small cart div */}
                  <h1 className="font-Cinzel font-medium lg:text-4xl lg:ml-10 ml-4 my-3 text-2xl">HI, WELCOME BACK!</h1> 
                   <div className="flex flex-col lg:flex-row gap-6 w-11/12 mx-auto  justify-center">
          {/* card-1 */}
          <div className="w-full sm:w-64 md:w-80 lg:w-96 h-30 flex justify-center items-center rounded-md bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
            <div className="flex items-center space-x-4 text-white">
              <img src={assets.wallet} alt="" className="w-10" />
              <div className="flex flex-col">
                <p className="text-2xl font-extrabold">{stats?.revenue}</p>
                <p>Revenue</p>
              </div>
            </div>
          </div>
        
          {/* card-2 */}
          <div className="w-full sm:w-64 md:w-80 lg:w-96 h-30 flex justify-center items-center rounded-md bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
            <div className="flex items-center space-x-4 text-white">
              <img src={assets.customer} alt="" className="w-10" />
              <div className="flex flex-col">
                <p className="text-2xl font-extrabold">{stats?.users}</p>
                <p>Customers</p>
              </div>
            </div>
          </div>
        
          {/* card-3 */}
          <div className="w-full sm:w-64 md:w-80 lg:w-96 h-30 flex justify-center items-center rounded-md bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
            <div className="flex items-center space-x-4 text-white">
              <img src={assets.chef} alt="" className="w-10" />
              <div className="flex flex-col">
                <p className="text-2xl font-extrabold">{stats?.menuItems}</p>
                <p>Products</p>
              </div>
            </div>
          </div>

          {/* cart-4 */}
          <div className="w-full sm:w-64 md:w-80 lg:w-96 h-30 flex justify-center items-center rounded-md bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
            <div className="flex items-center space-x-4 text-white">
              <img src={assets.truck} alt="" className="w-10" />
              <div className="flex flex-col">
                <p className="text-2xl font-extrabold">{stats?.orders}</p>
                <p>Orders</p>
              </div>
            </div>
          </div>
        </div>
        
         <div className='flex justify-center items-center md:flex-row flex-col'>
           <BarCharts chartData={chartData} />
        <PiChart chartData={chartData}/>
         </div>
         
     </div>
    );
};

export default AddminHome;