import React from 'react';
import './DishDetail.css'
import Commends from './Commends'
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';
import CommentForm from './CommentForm';
import NavItem from 'reactstrap/lib/NavItem';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

const DishDetail = (props) => {
    
    const {image,description,name,price,id} =props.selectedItemDetail;
    
    return (
        
        <div>
            <Card>
                <CardImg alt={name} src={image}/>
                <CardBody>
                    <CardTitle>
                        <strong className="nameTitle">{name}</strong>
                         <Link to="/order"><Button color="primary">
                                    Order Dish
                                </Button></Link>
                    </CardTitle>
                    <CardText style={{textAlign: 'left'}}>
                     price : {price}-/
                    </CardText>
                    <CardText>{description}</CardText>
                    <Commends comments={props.comments}></Commends>
                    <CommentForm addComment={props.addComment} dishId ={id} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;