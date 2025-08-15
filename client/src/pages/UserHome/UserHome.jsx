
import { FaCalendar, FaCartShopping, FaStar } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";
import { assets } from './../../assets/assets';
const UserHome = () => {

    return (
        <div className="w-10/12 mx-auto my-4">
            {/* small cart div */}
               <h1 className="font-Cinzel font-medium lg:text-4xl lg:ml-10 ml-4 my-3 text-2xl">HI, WELCOME BACK</h1> 
           <div className="flex flex-col lg:flex-row gap-6 w-11/12 mx-auto  justify-center">
  {/* card-1 */}
  <div className="w-full sm:w-64 md:w-80 lg:w-96 h-36 flex justify-center items-center rounded-md bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
    <div className="flex items-center space-x-4 text-white">
      <img src={assets.wallet} alt="" className="w-10" />
      <div className="flex flex-col">
        <p className="text-2xl font-extrabold">203</p>
        <p>Menu</p>
      </div>
    </div>
  </div>

  {/* card-2 */}
  <div className="w-full sm:w-64 md:w-80 lg:w-96 h-36 flex justify-center items-center rounded-md bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
    <div className="flex items-center space-x-4 text-white">
      <img src={assets.store} alt="" className="w-10" />
      <div className="flex flex-col">
        <p className="text-2xl font-extrabold">103</p>
        <p>Shop</p>
      </div>
    </div>
  </div>

  {/* card-3 */}
  <div className="w-full sm:w-64 md:w-80 lg:w-96 h-36 flex justify-center items-center rounded-md bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
    <div className="flex items-center space-x-4 text-white">
      <img src={assets.group} alt="" className="w-10" />
      <div className="flex flex-col">
        <p className="text-2xl font-extrabold">03</p>
        <p>Contact</p>
      </div>
    </div>
  </div>
</div>

           
        {/* large cart div */}
           <div className="flex flex-col md:flex-row w-11/12 mx-auto my-8 justify-center">
  {/* Card 1 */}
  <div className="flex justify-center items-center flex-col w-full md:w-80 lg:w-[622px] h-auto md:h-[465px] bg-[#FFEDD5] gap-4 border-r-0 md:border-r-2 border-[#D3A256] p-6 rounded-lg">
    <img
      src={assets.profile}
      alt=""
      className="w-28 md:w-30 rounded-full border-2 border-[#D3A256]"
    />
    <h3 className="font-cinzel font-medium text-3xl md:text-4xl text-center">
      RAJIB RAJ
    </h3>
  </div>

  {/* Card 2 */}
  <div className="flex justify-center  flex-col w-full md:w-80 lg:w-[622px] h-auto md:h-[465px] bg-[#FEF9C3] gap-4 p-6 rounded-lg">
   
    <h3 className="font-cinzel font-medium ml-4 text-2xl md:text-3xl ">
      YOUR ACTIVITIES
    </h3>
   <div className="ml-4">
    <div className='text-[#0088FE] flex items-center gap-1 '><FaCartShopping /> <h1 className="font-cinzel">ORDERS: 6</h1></div>
      <div className='text-[#FF8042] flex items-center gap-1 '><FaStar /> <h1 className="font-cinzel">REVIEWS: 2</h1></div>
        <div className='text-[#00C4A1] flex items-center gap-1 '><FaCalendar /> <h1 className="font-cinzel">BOOKINGS: 1</h1></div>
          <div className='text-[#FFBB28] flex items-center gap-1 '> <IoWalletSharp /> <h1 className="font-cinzel">PAYMENT: 3</h1></div>
   </div>
  </div>
</div>

        </div>
    );
};

export default UserHome;