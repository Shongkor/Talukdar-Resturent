import React, { Component } from 'react';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            telNumber: "",
            email: "",
            agree: false,
            contactType: "",
            message: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = event => {
        
        const value = event.target.name === "agree" ? event.target.checked : event.target.value ;
        const name = event.target.name;
        console.log(name, value)
        this.setState({
            [ name ] : value,
        })
    }
    handleSubmit = event => {
        console.log(this.state)
        event.preventDefault();
    }
    render() {
        document.title = 'Contact';
        return (
            <div className="container text-left">
                <div>
                    <h5 className="text-center">
                        Send Us Your Feedback
                    </h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group ">
                        <div className="form-row">
                            <label htmlFor="firstName" className="col-2"><strong>First Name</strong></label>
                        <strong className="col-1 d-flex align-items-center">:</strong>
                            <input onChange={this.handleChange} className="col-9 form-control" type="text" name="firstName" placeholder="First Name" value={this.state.firstName}/>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="form-row">
                            <label htmlFor="lastName" className="col-2"><strong>Last Name</strong></label>
                        <strong className="col-1 d-flex align-items-center">:</strong>
                            <input onChange={this.handleChange} className="col-9 form-control" type="text" name="lastName" placeholder="Last Name" value={this.state.lastName}/>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="form-row">
                            <label htmlFor="firstName" className="col-2"><strong>Email</strong></label>
                        <strong className="col-1 d-flex align-items-center">:</strong>
                            <input onChange={this.handleChange} className="col-9 form-control" type="email" name="email" placeholder="Email" value={this.state.email}/>
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="form-row">
                            <label htmlFor="telNumber" className="col-2"><strong>Contact Number</strong></label>
                        <strong className="col-1 d-flex align-items-center">:</strong>
                            <input onChange={this.handleChange} className="col-9 form-control" type="tel" name="telNumber" placeholder="Tel. Number" value={this.state.telNumber} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-row">
                        <label className="offset-2">
                            <input onChange={this.handleChange}  type="checkbox" name="agree" checked={this.state.agree} />
                            <strong> May we contact you? </strong>
                        </label>
                            
                            
                        <select onChange={this.handleChange} className="form-control offset-2 col-5" type="select" name="contactType" value={this.state.contactType}>
                            <option>Tel.</option>
                            <option>Email</option>
                        </select>
                                
                            
                            
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="form-row">
                            <label htmlFor="telNumber" className="col-2 d-flex align-items-center"><strong>Your Feedback</strong></label>
                            <strong className="col-1 d-flex align-items-center">:</strong>
                            <textarea onChange={this.handleChange} className="col-9 form-control" rows="12" type="textarea" name="message" placeholder="" value={this.state.message} />
                        </div>
                    </div>
                    <div className="form-group ">
                        <div className="form-row">
                            <div className="col-8 m-auto">
                            <button type="submit" className="btn btn-primary">
                                Send Feedback
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;