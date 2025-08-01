

const FoodCard = ({item}) => {
    const {image, name, recipe, price} = item;

    return (
      
             <div className="bg-white relative rounded-2xl pb-4 overflow-hidden border border-gray-500/30">
                <img className="w-full object-cover object-top" src={image} alt="userImage2" />
                <p className="bg-slate-950 text-white absolute right-0 top-0 mr-4 mt-4 px-3 py-1 rounded-md">${price}</p>
                <div className="flex flex-col items-center text-center p-4 space-x-2 space-y-2">
                    <p className="font-medium mt-3 text-xl">{name}</p>
                    <p className="text-gray-500 text-sm">{recipe}</p>

                    <style>{`
            .button-wrapper::before {
                animation: spin-gradient 4s linear infinite;
            }
        
            @keyframes spin-gradient {
                from {
                    transform: rotate(0deg);
                }
        
                to {
                    transform: rotate(360deg);
                }
            }
        `}</style>
        <div className="relative inline-block p-0.5 rounded-md overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#00F5FF,_#00F5FF30,_#00F5FF)] button-wrapper">
            <button className="relative z-10 bg-gray-800 text-white rounded-md px-8 py-3 font-medium text-sm">Add To Card</button>
        </div>
                </div>
            </div>
       
    );
};

export default FoodCard;