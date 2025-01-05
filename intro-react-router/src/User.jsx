// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Users from "./Users";
import './Users.css';

const User = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h3>Users: {users.length}</h3>
            <div className="users">
                {
                    users.map(user =><Users key={user.id} user={user}></Users>)
                }
            </div>
        </div>
    );
};

export default User;