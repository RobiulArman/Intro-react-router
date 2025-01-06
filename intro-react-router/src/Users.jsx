import React from 'react';  
import { Link, useNavigate } from "react-router-dom";  

const Users = ({ user }) => {  
    const { id, name, email, phone } = user;  
    const navigate = useNavigate();  

    const userStyle = {  
        border: '2px solid blue',  
        padding: '10px',  
        borderRadius: '10px',  
        margin: '10px'  
    };  

    const handleShowDetail = () => {  
        navigate(`/user/${id}`); // Added a slash before {id}  
    };  

    return (  
        <div style={userStyle}>  
            <h2>{name}</h2>  
            <p>Email: {email}</p>  
            <p>Phone: {phone}</p>  
            <Link to={`/user/${id}`}>Show Details</Link>  
            <button onClick={handleShowDetail}>Click to see Details</button>  
        </div>  
    );  
};  

export default Users;