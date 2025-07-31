import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import featured from '../../../assets/home/featured.jpg'


const Featured = () => {
    return (
        <div 
         className="relative bg-fixed my-20 text-white  mx-auto rounded-md h-[800px] md:h-[600px] lg:h-[700px] bg-cover bg-center items-center justify-center"
              style={{
                backgroundImage: `url(${featured})`,
              }}
        >
            <SectionTitel subHeading={'Check it'} heading={'Featured Item'}/>
           <div className="md:flex bg-black/20  justify-center items-center pb-10 md:pb-20 pt-12  md:px-36 px-12 ">
             <div className="md:w-6/12">
                <img src={featured} className="rounded-md" alt="" />
            </div>
            <div className="md:ml-10 md:w-6/12 max-sm:mt-3">
  <div className="">
    <h3 className="text-sm text-white">March, 2027</h3>
    <h2 className="text-xl font-semibold uppercase text-white">WHERE CAN I GET SOME?</h2>
    <p className="mt-2 text-white max-w-md ">
      Discover our chef’s special dish of the month, crafted with the finest ingredients and a touch of culinary magic. Don't miss out on this exclusive treat!
    </p>
     <div className="relative group overflow-hidden p-0.5  h-15 w-30 rounded-md active:scale-100 hover:scale-105 transition-all duration-300">
            <button className="text-white text-sm border-b-2 bg-gradient-to-t h-full w-full rounded-md">
                READ MORE
            </button>
            <div className="absolute -bottom-12 group-hover:-bottom-10 transition-all duration-200 left-1/2 -z-10 -translate-x-1/2 blur size-14 rounded-full bg-white"></div>
        </div>
  </div>
</div>

           </div>
        </div>
    );
};

export default Featured;