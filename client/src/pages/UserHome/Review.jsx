import { FaStar } from "react-icons/fa";
import SectionTitel from "../../components/SectionTitel/SectionTitel";

const Review = () => {
    return (
        <div className="w-11/12 mx-auto my-10">
            <SectionTitel subHeading={'Sharing is Caring'} heading={'GIVE A REVIEW'}/>
             <form className="flex flex-col items-center text-sm bg-[#F3F3F3] py-20 w-11/12 mx-auto rounded-sm">
            <p className="text-2xl text-black/80 font-medium pb-2 font-cinzel">RATE US!</p>
            <div className="flex space-x-3 ">
                <FaStar className="text-2xl text-[#D0D0D0]" />
                <FaStar className="text-2xl text-[#D0D0D0]" />
                <FaStar className="text-2xl text-[#D0D0D0]" />
                <FaStar className="text-2xl text-[#D0D0D0]" />
                <FaStar className="text-2xl text-[#D0D0D0]" />

            </div>
            <div className="flex my-10 flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Which recipe you liked most?</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Recipe you liked most" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Do you have any suggestion for us?</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" placeholder="Suggestion" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Kindly express your care in a short way.</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" placeholder="Review in details" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-gradient-to-r  from-[#835D23] to-[#e9cfa5] text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Review</button>
        </form>
        </div>
    );
};

export default Review;