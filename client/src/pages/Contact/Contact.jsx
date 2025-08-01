import Cover from "../Shared/Cover/Cover";
import contactimg from '../../assets/contact/banner.jpg'
import SectionTitel from "../../components/SectionTitel/SectionTitel";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
const Contact = () => {
    return (
        <div className="py-6">
            <Cover image={contactimg} titel={'CONTACT US'} subtitel={'Have a question or need help with your order? Our team is here for you! Reach out anytime—we’d love to hear from you.'}/>

            <SectionTitel subHeading={'Visit Us'} heading={'our location'}/>

            <div className="w-10/12 mt-7 mx-auto grid md:grid-cols-3 gap-4">
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

export default Contact;