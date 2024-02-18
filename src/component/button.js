import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    // Handle button click event
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default ButtonComponent;
