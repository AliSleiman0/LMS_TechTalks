import React from 'react';

interface RandomButtonProps {
  onClick?: () => void;
  label?: string;
}

const RandomButton: React.FC<RandomButtonProps> = ({ onClick, label = 'Random' }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default RandomButton;