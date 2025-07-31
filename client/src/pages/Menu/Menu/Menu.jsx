
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
           <Cover image={dessertsimg}  titel={'DESSERTS'} subtitel={'Healthy Gelato Treats — Tiny treats, big satisfaction – indulge in our low-calories, gluten-free mini sticks!'}/>
            <MenuCategory items={ dessert} />
              <Cover image={pizzaImage}  titel={'Pizza'} subtitel={'Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce'}/>
              <MenuCategory items={ pizza} />
               <Cover image={saladImage}  titel={'Salad'} subtitel={'Sautéed breaded veal escalope with watercress, lemon and veal jus.'}/>
               <MenuCategory items={ salad} />
               <Cover image={suopImage}  titel={'Saups'} subtitel={'Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus'}/>
                <MenuCategory items={ soup} />
                 <Cover image={Bannerimg}  titel={'Drinks'} subtitel={'Pan roasted pork belly with gratin potato, braised Savoy cabbage, apples, thyme and calvados jus'}/>
                  <MenuCategory items={ drinks} />
        </div>
    );
};

export default Menu;