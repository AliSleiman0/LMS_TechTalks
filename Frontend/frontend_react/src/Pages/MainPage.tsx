import React from 'react';
import RandomButton from '../Components/Button';

const MainPage: React.FC = () => {
  const handleClick = () => {
    alert('Random button clicked!');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to the Main Page</h1>
      <p>This is a sample page demonstrating the use of a reusable button component.</p>
      <RandomButton onClick={handleClick} label="Click Me!" />
      <p>Feel free to explore and customize this page.</p>
    </div>
  );
};

export default MainPage;