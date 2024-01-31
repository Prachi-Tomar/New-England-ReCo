import React from "react";

const footerStyles = {
    footer: {
        marginTop: '50px',
        backgroundColor: '#005030',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #e7e7e7',
        display: 'flex',
        justifyContent: 'space-around', 
        flexWrap: 'wrap'
    },
    footerSection: {
        marginBottom: '15px',
        minWidth: '150px'
    },
    title: {
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    link: {
        textDecoration: 'none',
        color: '#007bff',
        display: 'block',
        margin: '5px 0'
    },
    icon: {
        color: '#007bff',
        fontSize: '20px',
        margin: '0 5px'
    }
};

function Footer() {
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.footerSection}>
                <h4 style={footerStyles.title}>Guides</h4>
                <a href="#" style={footerStyles.link}>Link 1</a>
                <a href="#" style={footerStyles.link}>Link 2</a>
            </div>
            <div style={footerStyles.footerSection}>
                <h4 style={footerStyles.title}>Company</h4>
                <a href="#" style={footerStyles.link}>About Us</a>
                <a href="#" style={footerStyles.link}>Contact</a>
            </div>
            <div style={footerStyles.footerSection}>
                <h4 style={footerStyles.title}>Resources</h4>
                <a href="#" style={footerStyles.link}>Resource 1</a>
                <a href="#" style={footerStyles.link}>Resource 2</a>
            </div>
            <div style={footerStyles.footerSection}>
                <h4 style={footerStyles.title}>Get Social</h4>
                <a href="https://www.facebook.com" style={footerStyles.link}>
                    <i className="fab fa-facebook" style={footerStyles.icon}></i>
                </a>
                <a href="https://www.twitter.com" style={footerStyles.link}>
                    <i className="fab fa-twitter" style={footerStyles.icon}></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;