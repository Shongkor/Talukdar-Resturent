import React from 'react';


const Commends = (props) => {
    const {comments} = props;
    var dateFormat = require("dateformat");
    
    return (
        <div>
            <br />
            <h4 style={{borderBottom: '2px solid black' , display: "inline-block"}}>Commends</h4>
            <br />
            <div>
            {
                comments.map(com  =>  
                    <div key={com.id}>
                        <hr />
                        <p><strong>{com.author}</strong></p>
                        <p>" {com.comment} "</p>
                        <p> Rating : {com.rating} </p>
                        <p>{dateFormat(com.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                    </div>
                )
            }
            
            </div>
            {/* <CommentForm dishId ={comments[0].dishId} /> */}
            
        </div>
    );
};

export default Commends;