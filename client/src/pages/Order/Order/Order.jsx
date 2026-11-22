import { useState } from 'react';
import orderimg from '../../../assets/shop/banner2.jpg'
import FoodTab from '../../../components/SectionTitel/FoodCard/FoodTab';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useParams} from 'react-router'
const Order = () => {
    const categories = ['salad','chicken', 'pizza', 'dessert', 'kebab']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const salads = menu.filter(item => item.category === 'salad')
    const chicken = menu.filter(item => item.category === 'chicken')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const kebab = menu.filter(item => item.category === 'kebab')
    
    return (
        <div>
            <Cover image={orderimg} titel={'our shop'} subtitel={'Delicious meals delivered fast—order your favorite dishes from Our Food Order Shop today!'} />

           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'my-6 text-center w-11/12 mx-auto'} >
            <TabList>
                <Tab>SALADS</Tab>
                <Tab>CHICKEN</Tab>
                <Tab>PIZZA</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>KEBAB</Tab>
            </TabList>
              <TabPanel>
                { 
                    <FoodTab items={salads}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={chicken}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={pizza}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={dessert}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={kebab}/>
                }
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;