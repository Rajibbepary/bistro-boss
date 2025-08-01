import FoodCard from "./FoodCard";


const FoodTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-10'>
                    {
                        items.map((item)=> <FoodCard key={item._id} item={item}/>)
                    }
                </div>
    );
};

export default FoodTab;