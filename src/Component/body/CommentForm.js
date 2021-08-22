import React, { Component } from 'react';


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author : "",
            rating : "",
            comment : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = event => {
        
        const value = event.target.value ;
        const name = event.target.name;
        this.setState({
            [ name ] : value,
        })
    }
    handleSubmit = event => {
        this.props.addComment(this.props.dishId,this.state.author,this.state.rating,this.state.comment)
        event.preventDefault();
        this.setState({
            author : "",
            rating : "",
            comment : ""
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div>
                <br />
                <h6 style={{borderBottom: '2px solid black' , display: "inline-block"}}>Add Comment</h6>
                <form onSubmit={this.handleSubmit}> 
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <input onChange={this.handleChange} type="text" name="author" value={this.state.author} className="form-control" placeholder="Your Name" id="inputPassword" required/>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <select onChange={this.handleChange} className="form-control" name="rating" id="exampleFormControlSelect1" value={this.state.rating}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                    </div>
                    <br />
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <input onChange={this.handleChange} type="text" name="comment" value={this.state.comment} className="form-control" placeholder="Comment" id="inputPassword" required/>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CommentForm;