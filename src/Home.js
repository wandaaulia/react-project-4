import React, { useState} from 'react'
import menus from './data'
import Categories from './Categories'
import Menu from './Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';


export default function Home() {
    

    const allCategories = ['all', ...new Set(menus.map((menu) => menu.category))];
    
    const [menuItems, setMenuItems] = useState(menus);
    const [categories, setCategories] = useState(allCategories);


    const filterCategory = (category) => {

        if(category === 'all') {
            setMenuItems(menus);
            return;
        }

        const newItems = menus.filter((menu) => menu.category === category);
        return setMenuItems(newItems);
    }

    return (
        <div>       
            <div className="mt-5 p-3"> 
                <Categories categories={categories} filterCategory={filterCategory}/> 
                </div>
                 <Container fluid className=" p-3 mt-5"> 
                 <Menu menuItems={menuItems} />
                 </Container>
                </div>
    )
}
