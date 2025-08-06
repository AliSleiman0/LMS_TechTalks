import React from "react";

import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout: React.FC = () => (
    <>
        <Navbar />
        <Outlet /> {/* This is where nested pages render */}
        <Footer />
    </>
);

export default Layout;
