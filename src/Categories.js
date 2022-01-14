import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, ButtonGroup} from 'react-bootstrap';

export default function Categories({categories, filterCategory}) {
    
    return (
        <ButtonGroup aria-label="Basic example">
    { categories.map((category, index) => {
        return (
            <Button variant="outline-dark" key={index} 
            onClick={() => filterCategory(category)}> 
            {category} 
            </Button>
        )
    })}
    </ButtonGroup>
    )
}