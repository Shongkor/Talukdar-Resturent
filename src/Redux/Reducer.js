import DISHES from '../data/Dishes.js'
import COMMENTS from '../data/Comments.js'
import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const dishReducer =(dishesState = DISHES,action) => {
    switch (action.type){
        default :
            return dishesState;
    }
}
const commentReducer =(commentState=COMMENTS,action) => {
    switch (action.type){
        case actionTypes.addComment :
            const comment = action.payload;
            comment.id= commentState.length;
            comment.date = new Date().toDateString();
            return commentState.concat(comment);
        default :
            return commentState;
    }
    
}
export const Reducer = combineReducers({
    dishes : dishReducer,
    comments : commentReducer,
})