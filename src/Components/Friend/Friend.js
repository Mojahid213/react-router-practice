import React from 'react';
import './Friend.css';
const Friend = (props) => {
    const{name,email} = props.friend;
    return (
        <div className="friend-div">
            <h2>Name: {name}</h2>
            <h3>Email:{email}</h3>
        </div>
    );
};

export default Friend;