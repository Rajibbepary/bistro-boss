import { useState } from 'react';
import orderimg from '../../../assets/shop/banner2.jpg'
import FoodTab from '../../../components/SectionTitel/FoodCard/FoodTab';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useParams} from 'react-router'
const Order = () => {
    const categories = ['salad', 'pizza', 'soup', ' dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    
    return (
        <div>
            <Cover image={orderimg} titel={'our shop'} subtitel={'Delicious meals delivered fast—order your favorite dishes from Our Food Order Shop today!'} />

           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'my-6 text-center w-11/12 mx-auto'} >
            <TabList>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUPS</Tab>
                <Tab>DESSERTS</Tab>
                <Tab>DRINKS</Tab>
            </TabList>
            <TabPanel>
                { 
                    <FoodTab items={salad}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={pizza}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={soup}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={dessert}/>
                }
            </TabPanel>
            <TabPanel>
                { 
                    <FoodTab items={drinks}/>
                }
            </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;