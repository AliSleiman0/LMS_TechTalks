import React, { ReactNode } from 'react';
import NavComponent from '../Navbar';
import learningImage from '../../learing.jpg'
       // ,border:"5px solid black"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <>
        
            <NavComponent />

        <main style={{ minHeight: '80vh', padding: '2rem',background:"purple" }}>
<div className="container" style={{ display: 'flex', flexDirection: 'row',width:"1500px",height:"600px" }}>
 <div className="text-div" style={{ margin: '20px', textAlign: 'center' }}>
<p style={{fontSize:"50px",fontWeight:"bold",color:"white"}}>Welcome to My Page!
</p>
<p style={{fontSize:"20px",color:"white",marginTop:"30px"}} >Our learning website offers a wide range of courses designed to help you acquire new skills in various fields, from technology to arts and sciences.
With interactive lessons, quizzes, and hands-on projects, you can engage deeply with the material and track your progress along the way.
</p>
<div style={{display: 'flex', flexDirection: 'row',justifyContent:"center"}}>
<button style={{color:"purple",backgroundColor:"white",width:"200px",height:"50px",borderRadius:"15px",marginRight:"20px",fontSize:"25px",border:"2px solid purple"}}>Start Learning Today</button>
<button style={{color:"white",backgroundColor:"purple",width:"200px",height:"50px",borderRadius:"15px",marginRight:"20px",fontSize:"25px",border:"2px solid white"}}>Explore Courses</button>
</div>
</div>
<div className="image-div" style={{ margin: '30px' }}>
<img src={learningImage} alt="Description" style={{ width: '600px', height: 'auto',marginLeft:"100px" }} />
                </div>
            </div>

          
            {children}
        </main>
        <footer style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa' }}>
            &copy; {new Date().getFullYear()} My App
        </footer>
    </>
);

export default Layout;