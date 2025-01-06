// import React from 'react';

import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {userId} =useParams();
    const {name,website} =user;
    const navigate = useNavigate();
    console.log(userId);
    const handleGoBack = () => {
         navigate(-1);
    }
    return (
        <div>
            <h2>User Details: {name}</h2>
            <p>website: {website}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;