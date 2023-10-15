import React, { useState } from 'react';
import '../styles/App.css';
import star from '../star.png';

const App = () => {
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

  const handleClick = () => {
    const newDimensions = {
      width: dimensions.width + 2,
      height: dimensions.height + 2,
    };
    setDimensions(newDimensions);
  };

  return (
    <div id="main">
      <img
        src={star}
        height={`${dimensions.height}px`}
        width={`${dimensions.width}px`}
        onClick={handleClick}
      />
    </div>
  );
};

export default App;

