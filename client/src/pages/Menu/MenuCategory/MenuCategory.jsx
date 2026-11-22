
import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';


const MenuCategory = ({items, titel }) => {
    return (
        <div >
          
          <div className="grid w-11/12 my-12 mx-auto md:grid-cols-2 gap-10">
                {
                    items.slice(0, 6).map(item=> <MenuItem key={item._id} item={item}/>)
                }
            </div>
            <Link to={`/order/${titel}`}>
            <div className="text-center my-10">
                <button className=" border-0 border-b-4 border-[#CE2828] rounded-3xl px-2 text-[#CE2828] mt-8 ">Order Our Favourite Food</button>
            </div>
            </Link>
        </div>
    );
};

export default MenuCategory;