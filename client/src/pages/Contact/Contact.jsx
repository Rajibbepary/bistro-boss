import Cover from "../Shared/Cover/Cover";
import contactimg from '../../assets/contact/banner.jpg'
import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
    return (
        <div className="">
            <Cover image={contactimg} titel={'CONTACT US'} subtitel={'Have a question or need help with your order? Our team is here for you! Reach out anytime—we’d love to hear from you.'}/>

            <SectionTitel subHeading={'Visit Us'} heading={'our location'}/>

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

            <SectionTitel subHeading={'Send Us a Message'} heading={'CONTACT FROM'}/>

            {/* contact from */}
            <div className="my-10 bg-[#f3f3f3] py-12 w-10/12 mx-auto">

                 <form className="flex flex-col items-center text-sm">
           
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>

            {/* phone */}
                <div className="flex flex-col mt-3 md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Phone</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
            </div>

            
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 flex justify-center items-center bg-gradient-to-r from-[#835d23] to-[#b58130] text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message <IoIosSend className="ml-2 text-xl" /></button>
        </form>
            </div>

        </div>
    );
};

export default Contact;