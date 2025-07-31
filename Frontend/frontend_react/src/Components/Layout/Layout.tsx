import React, { ReactNode } from 'react';
import NavComponent from '../Navbar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <>
        
            <NavComponent />
       
        <main style={{ minHeight: '80vh', padding: '2rem' }}>
            {children}
        </main>
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa' }}>
            &copy; {new Date().getFullYear()} My App
        </footer>
    </>
);

export default Layout;