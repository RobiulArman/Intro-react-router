// import React from 'react';

const Users = ({user}) => {
    const{id,name,email,phone} = user;
    const userStyle = {
        border: '2px solid blue',
        padding:'10px',
        borderRadius:'10px',
        margin:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    );
};

export default Users;