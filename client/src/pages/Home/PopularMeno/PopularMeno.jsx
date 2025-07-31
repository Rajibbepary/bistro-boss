
import SectionTitel from "../../../components/SectionTitel/SectionTitel";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMeno = () => {

    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-12 w-11/12 mx-auto text-center">
             <SectionTitel subHeading={'Check it out'} heading={'From our menu'}  >
                
            </SectionTitel>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}/> )
                }
            </div>
            <button className="uppercase border-0 border-b-4 rounded-md text-black mt-8 ">view full menu</button>
        </section>
    );
};

export default PopularMeno;