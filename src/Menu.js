import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Badge, Col, Row} from 'react-bootstrap';

export default function Menu({menuItems}) {

        return (
    
            <Row className="justify-content-center"> 
            {menuItems.map((menu) => {
                const {id, title, price, category, desc, img} = menu;
                return (
                    <Col className="mt-4 align-item-center m-2" md={3}>
                    <Card style={{ width: '24rem', height:'30rem' }} key={id} className="">
                    <Card.Img variant="top" src={img} style={{height:'15rem', objectFit:'cover'}}/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                        <Card.Text className="mb-4">
                        {desc}
                        </Card.Text>
                        <h3> <Badge bg="warning">{price}</Badge> </h3>
                    </Card.Body>
                    </Card>
                    </Col> 
                )
            })}
            </Row>
        )
    
}