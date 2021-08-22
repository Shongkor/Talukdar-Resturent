import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = (props) => {
    const {name,image}=props.dish;
    const {details}=props;
    
    return (
      
        <div>
            <Card>
                <CardBody>
                    <CardImg alt={name} src={image} width="100" style={{opacity:"0.5"}}/>
                    <CardImgOverlay>
                        <CardTitle onClick={() => details()} style={{cursor: "pointer",fontSize: '20px'}}>{name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;