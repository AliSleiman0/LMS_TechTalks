import React from 'react';
import RandomButton from '../Components/Button';

const MainPage: React.FC = () => {
  const handleClick = () => {
    alert('Random button clicked!');
  };

  return (
    <div>
      <header style={{display:"flex",justifyContent:"end"}}>
        <button style={{fontSize:"25px",backgroundColor:"#28a745",margin:"20px 30px 0 0"}}><a style={{textDecoration:"none",color:"white"}} href='/signin'>Sign In</a></button>
                <button style={{fontSize:"25px",backgroundColor:"#28a745",margin:"20px 30px 0 0"}}><a style={{textDecoration:"none",color:"white"}}href='/signup'>Sign Up</a></button>

      </header>
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Main Page</h1>
      <p>This is a sample page demonstrating the use of a reusable button component.</p>
      <RandomButton onClick={handleClick} label="Click Me!" />
      <p>Feel free to explore and customize this page.</p>
    </div>
    </div>
  ); 
};

export default MainPage;