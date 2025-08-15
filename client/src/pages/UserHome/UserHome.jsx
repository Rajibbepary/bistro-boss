

import { assets } from './../../assets/assets';
const UserHome = () => {

    return (
        <div className="w-10/12 mx-auto my-8">
            {/* small cart div */}
               <h1 className="font-Cinzel text-4xl ml-10 my-3">HI, WELCOME BACK</h1> 
            <div className="flex lg:flex-row flex-col gap-8 w-11/12 mx-auto">
            {/* cart-1 */}
            <div className="w-[400px] h-[150px] flex justify-center rounded-sm bg-linear-to-r from-[#BB34F5] to-[#FCDBFF]">
            <div className="flex justify-center items-center space-x-2 text-white">
            <img src={assets.wallet} alt="" className='w-10' />
            <div className="flex flex-col">
             <p className="text-2xl font-extrabold">203</p>
            <p>Menu</p>
            </div>
            </div>
           </div>
           {/* cart-2 */}
           <div className="w-[400px] h-[150px] flex justify-center rounded-sm bg-linear-to-r from-[#D3A256] to-[#FDE8C0]">
            <div className="flex justify-center items-center space-x-2 text-white">
             <img src={assets.store} alt="" className='w-10'  />
            <div className="flex flex-col">
             <p className="text-2xl font-extrabold">103</p>
            <p> Shop</p>
            </div>
            </div>
           </div>
           {/* cart-3 */}
           <div className="w-[400px] h-[150px] flex justify-center rounded-sm bg-linear-to-r from-[#FE4880] to-[#FECDE9]">
            <div className="flex justify-center items-center space-x-2 text-white">
             <img src={assets. group} alt="" className='w-10'  />
            <div className="flex flex-col">
             <p className="text-2xl font-extrabold">03</p>
            <p>Contact</p>
            </div>
            </div>
           </div>
            </div>
           
        {/* large cart div */}
           <div>

           </div>
        </div>
    );
};

export default UserHome;