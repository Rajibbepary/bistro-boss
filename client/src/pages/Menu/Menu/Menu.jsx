
import Cover from '../../Shared/Cover/Cover';
import Bannerimg from '../../../assets/menu/banner3.jpg'
import dessertsimg from '../../../assets/menu/dessert-bg.jpeg'
import SectionTitel from '../../../components/SectionTitel/SectionTitel';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import suopImage from '../../../assets/menu/soup-bg.jpg'
const Menu = ( ) => {
const [menu] = useMenu()
  
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const  offered = menu.filter(item => item.category === 'offered')
   
    return (
        <div>
           <Cover image={Bannerimg}  titel={'Our Menu'} subtitel={'WORLD YOU LIKE TO TRY DISH?'}/>
           <SectionTitel subHeading={"Don't miss"} heading={"TODAY' OFFER"}/>
           <MenuCategory items={offered} />
           <Cover image={dessertsimg}  titel={'dessert'} subtitel={'Healthy Gelato Treats — Tiny treats, big satisfaction – indulge in our low-calories, gluten-free mini sticks!'}/>
            <MenuCategory items={ dessert} titel={'dessert'} />
              <Cover image={pizzaImage}  titel={'pizza'} subtitel={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'}/>
              <MenuCategory items={ pizza} titel={'pizza'} />
               <Cover image={saladImage}  titel={'salad'} subtitel={'Sautéed breaded veal escalope with watercress, lemon and veal jus.'}/>
               <MenuCategory items={ salad} titel={'salad'} />
               <Cover image={suopImage}  titel={'soup'} subtitel={'Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus'}/>
                <MenuCategory items={ soup} titel={'soup'} />
                 <Cover image={Bannerimg}  titel={'drinks'} subtitel={'Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus'}/>
                  <MenuCategory items={ drinks} titel={'drinks'} />
        </div>
    );
};

export default Menu;