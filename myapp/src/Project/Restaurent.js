import React, { useState } from 'react';
import './style.css'
import Menu from './MenuApi';
import Menucard from './Menucard';
import Navbar from './Navbar';

const uniquevalue = [...new Set(Menu.map((curElem) => {
    return curElem.category
}))]
console.log(uniquevalue)

const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMenuList] = useState(uniquevalue)
    // console.log(menuData)
    const filterItem = (category) => {
        const updatedvalue = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedvalue);
    }
    return (
        <div>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Menucard menuData={menuData} />
        </div>
    );
}

export default Restaurent;
