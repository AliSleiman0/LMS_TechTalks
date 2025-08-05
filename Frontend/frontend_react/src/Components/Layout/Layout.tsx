import React from "react";
import NavComponent from "../Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => (
  <>
    <NavComponent />
    <main style={{ minHeight: "80vh" }}>
      <Outlet /> {/* This is where nested pages render */}
    </main>
    <footer
      style={{ textAlign: "center", padding: "1rem", background: "#f8f9fa" }}
    >
      &copy; {new Date().getFullYear()} My App
    </footer>
  </>
);

export default Layout;
