import React from 'react';

function Button({text}) {
    const buttonStyle = {
      backgroundColor: '#005030',
      border: 'none', 
      borderRadius: '15px',
      color: 'white', 
      padding: '10px 20px', 
      textAlign: 'right', 
      textDecoration: 'none', 
      display: 'inline-block', 
      fontSize: '14px', 
      margin: '4px 2px', 
      transition: 'background-color 0.3s' 
    };
  
    const hoverStyle = {
      backgroundColor: '#45a049' 
    };
  
    // State to handle hover effect
    const [hover, setHover] = React.useState(false);

    return (
        <button
          style={{ ...buttonStyle, ...(hover ? hoverStyle : {}) }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {text}
        </button>
      );
    }
    
    export default Button;