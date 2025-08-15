import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { FaPhoneVolume,FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
const Reservation = () => {
    return (
        <div className="w-11/12 mx-auto font-cinzel">

            <SectionTitel  subHeading={'Reservation'} heading={'BOOK A TABLE'}/>
            <form className="flex w-11/12 mx-auto flex-col items-center text-sm my-9">
            <div className="flex w-full flex-col md:flex-row items-center gap-2">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Name</label>
                    <input className="h-12 p-2 mt-2 w-full  border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Enter Name" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" placeholder="Enter Email" required />
                </div>
                 <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Phone</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" placeholder="Enter Phone" required />
                </div>
            </div>
            <div className="flex flex-col w-full md:flex-row items-center gap-2 my-6">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Date</label>
                    <input className="h-12 p-2 mt-2 w-full  border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="date" placeholder="Enter Date" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Time</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="time" placeholder="Enter Time" required />
                </div>
                 <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Guest</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="number" placeholder="Enter Phone" required />
                </div>
            </div>
           
        
        <button type="submit" className="mt-5 bg-gradient-to-r from-[#835D23] to-[#e9cfa5] text-white h-12 w-50 flex justify-center items-center gap-3 px-4 rounded active:scale-95 transition text-xl">Book A <FaCalendarAlt className="text-xl" /></button>
        </form>
            <SectionTitel  subHeading={'Visit'} heading={'OUR LOCATION'}/>
            <div className="w-10/12 my-10 mx-auto grid md:grid-cols-3 gap-4">
            {/* card-1 */}
                <div className=" w-ful bg-white box-border border text-center border-[#e8e8e8]">
                        <div className="w-full flex justify-center items-center p-4 bg-[rgb(209,160,84)]">
                   <FaPhoneVolume className=" text-white" />
                    </div>
                    <div className="pt-0 pr-5 pb-5 pl-5">
                    <div className="text-black text-center bg-[rgb(243,243,243)]  py-16">
                        <h3 className="text-lg font-semibold">PHONE</h3>
                        <p className="text-[rgb(68, 68, 68)]">+30 (012) 83 65 843</p>
                    </div>
                    </div>

                </div>
                {/* card-2 */}
                 <div className=" w-ful bg-white box-border border text-center border-[#e8e8e8]">
                        <div className="w-full flex justify-center items-center p-4 bg-[rgb(209,160,84)]">
                        <FaLocationDot className='text-white' />
                    </div>
                    <div className="pt-0 pr-5 pb-5 pl-5">
                    <div className="text-black text-center bg-[rgb(243,243,243)]  py-16">
                        <h3 className="text-lg font-semibold uppercase">address</h3>
                        <p className="text-[rgb(68, 68, 68)]">Dhaka, Bangladesh</p>
                    </div>
                    </div>

                </div>
                {/* card-3 */}
                 <div className=" w-ful bg-white box-border border text-center border-[#e8e8e8]">
                        <div className="w-full flex justify-center items-center p-4 bg-[rgb(209,160,84)]">
                   <MdAccessTimeFilled className='text-white' />
                    </div>
                    <div className="pt-0 pr-5 pb-5 pl-5">
                    <div className="text-black text-center bg-[rgb(243,243,243)]  py-13">
                        <h3 className="text-lg font-semibold">WORKING HOURS</h3>
                       <p className="text-[rgb(68, 68, 68)]">
                        Mon - Fri: 08:00 - 22:00</p>
                        Sat - Sun: 10:00 - 23:00
                    </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Reservation;