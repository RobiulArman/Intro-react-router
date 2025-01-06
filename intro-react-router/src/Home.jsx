// import React from 'react';

import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const navigation = useNavigation();
    const location =useLocation();
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <p>Loading...</p>:
                
            
            <Outlet></Outlet>
}
            <Footer></Footer>
            {/* <h3>This is the Home Component</h3>
            <Outlet></Outlet> */}
        </div>
    );
};

export default Home;