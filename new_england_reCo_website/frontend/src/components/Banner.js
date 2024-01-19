import React from "react";
import NERELogo from './images/NERELogo.png';
import Button from "./Button";

const bannerStyle = {
    background: '#005030',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'right',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'white',
    
};

const headingStyle = {
    fontSize: '3em',
    marginBottom: '0.5em',
    fontFamily: '"EB Garamond", serif',
    color: 'white'
}; 

const containerStyle = {
    background: '#005030',
    textAlign: 'right', // Aligns child elements to the right
  };

function Banner() {
    return (
        <>
        <div className="banner" style={bannerStyle}>
            <img src={NERELogo} alt="NERE logo" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', paddingTop: '30px'}}/>
            <div style={containerStyle}>
                <Button text="Log in | Sign up"/>
            </div>
        </div></>
    );
}

export default Banner;