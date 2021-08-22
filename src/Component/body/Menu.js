import React, { Component } from 'react';
import DishDetail from './DishDetail.js';
import MenuItem from './MenuItem.js';
import {Modal, ModalBody, ModalFooter, CardColumns, Button} from 'reactstrap'
import * as actionTypes from '../../Redux/actionTypes'
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return {
        dishes : state.dishes,
        comments : state.comments,
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addComment: (dishId,author,rating,comment) => dispatch({
            type : actionTypes.addComment,
            payload : {
                author : author,
                rating : rating,
                comment : comment,
                dishId : dishId
            }
        })
    }
}
class Menu extends Component {
    state ={
        selectedItem : null,
        isModalOpen : false,
    }
    details = dishData => {
        this.setState({
            selectedItem : dishData,
            isModalOpen : !this.state.isModalOpen,
        });
     
    }
    
    ToggleDetails = () => {
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        })
    }
    render() {
       const menu = () =>this.props.dishes.map(item => <MenuItem dish={item} details={() => this.details(item)} key={item.id}></MenuItem>)
       let selectedMealDetail=null;
      
       if(this.state.selectedItem != null) {
           const comments = this.props.comments.filter(comment => {
               return comment.dishId === this.state.selectedItem.id
            })
         selectedMealDetail = <DishDetail selectedItemDetail={this.state.selectedItem} comments={comments} addComment={this.props.addComment}></DishDetail>
       
       };
       document.title = "Menu";
        return (
            
                <div className="container">
                    <div className="row">
                        <CardColumns>{menu()}</CardColumns>
                        <Modal isOpen={this.state.isModalOpen} >
                            <ModalBody>
                                {
                                    selectedMealDetail
                                }
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={this.ToggleDetails}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);