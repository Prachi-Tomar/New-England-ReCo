import React from "react";

const bannerStyle = {
    background: '#005030',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

function Banner() {
    return (
        <div className="banner" style={bannerStyle}>
            <h1 style={headingStyle}>The New England Real Estate Company</h1>
        </div>
    );
}

export default Banner;