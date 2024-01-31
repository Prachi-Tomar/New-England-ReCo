import React from "react";
import Button from "./Button";

const searchBarStyles = {
    container: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
    },
    input: {
        border: '2px solid #333',
        padding: '10px 15px',
        borderRadius: '25px',
        marginRight: '10px',
        outline: 'none',
        fontSize: '16px',
        flex: '1' 
    },
    button: {
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        outline: 'none',
        transition: 'background-color 0.3s'
    },
    icon: {
        fontSize: '20px', 
    }
};

const SearchBar = () => {
    return (
        <div style={searchBarStyles.container}>
            <input type="text" placeholder="Find your home..." style={searchBarStyles.input} />
            <button style={searchBarStyles.button}>
                <i className="fas fa-search" style={searchBarStyles.icon}></i>
            </button>
        </div>
    );
};

export default SearchBar;