
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
                <button className="uppercase border-0 border-b-4 rounded-md text-black mt-8 ">order our favourite food</button>
            </div>
            </Link>
        </div>
    );
};

export default MenuCategory;