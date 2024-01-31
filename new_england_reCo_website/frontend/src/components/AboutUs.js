import React from "react";
import IMGLisa from './images/IMGLisa.jpg';

const aboutUsStyle = {
    aboutUs: {
        display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: '1fr 1fr',
        columnGap: '10px'
    },
    text: {
        fontSize: '15px',
    },
    img: {
        maxWidth: '100%',
        maxHeight: 'auto'
    }
    
};

function AboutUs() {
    return (
        <>
        <div class="aboutUs" style={aboutUsStyle.aboutUs} >
            <div class="text" style={aboutUsStyle.text}>   
                <h1> About Us</h1>
                <h2>Our Approach is Simple. Our Passion is Maine. We are a dynamic, full service team of real estate experts. No drama, just caring people dedicated to raising the industry standard in your experience, whether you are looking to buy, sell or invest. Our extensive knowledge of mid-coast Maine allows us to help you find your perfect home from a quiet cabin in the woods, to in-town condo or oceanfront luxury home. We service the entire spectrum!</h2>
                <h2>Contact us to learn what we do differently.</h2>
            </div> 
            <img class="img" style={aboutUsStyle.img} src={IMGLisa} alt="IMG Lisa"/>
        </div></>
    );
}

export default AboutUs;