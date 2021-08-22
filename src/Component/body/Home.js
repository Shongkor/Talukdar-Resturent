import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

const mapStateToProps = state => {
    console.log(state)
    return {
        dishes : state.dishes,
    }
}

class Home extends Component {
    render() {
        document.title = 'Talukdar Rasturant'; 
        return (
            <div>
                <Loading></Loading>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Home);