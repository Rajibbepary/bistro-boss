import { useEffect, useState } from "react";
import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMeno = () => {

const [menu, setMenu] = useState([]);

useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => { 
            const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems)})
},[])

    return (
        <section className="mb-12 w-11/12 mx-auto">
             <SectionTitel subHeading={'Check it out'} heading={'From our menu'}  >
                
            </SectionTitel>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}/> )
                }
            </div>
        </section>
    );
};

export default PopularMeno;