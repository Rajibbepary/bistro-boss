
import Cover from '../../Shared/Cover/Cover';
import Bannerimg from '../../../assets/menu/banner3.jpg'
import dessertsimg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitel from '../../../components/SectionTitel/SectionTitel';

const Menu = ( ) => {
    return (
        <div>
           <Cover image={Bannerimg}  titel={'Our Menu'} subtitel={'WORLD YOU LIKE TO TRY DISH?'}/>
           <SectionTitel subHeading={"Don't miss"} heading={"TODAY' OFFER"}/>
           <Cover image={dessertsimg}  titel={'DESSERTS'} subtitel={'Healthy Gelato Treats — Tiny treats, big satisfaction – indulge in our low-calories, gluten-free mini sticks!'}/>
        </div>
    );
};

export default Menu;