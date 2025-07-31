

const Cover = ({image, titel, subtitel}) => {
    return (
        <div
              className="relative  max-sm:p-6 mx-auto rounded-md h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="bg-black/50 bg-color/opacity p-6 md:p-10 rounded-md text-center max-w-2xl mx-4  opacity-90 ">
                <h2 className="text-white text-2xl font-bold mb-4" >{titel}</h2>
                <p className="text-[#FFFFFF] " >
             {subtitel}       
        </p>
        
              </div>
            </div>
    );
};

export default Cover;