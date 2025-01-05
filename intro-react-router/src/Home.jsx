// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <h3>This is the Home Component</h3>
            <Outlet></Outlet> */}
        </div>
    );
};

export default Home;