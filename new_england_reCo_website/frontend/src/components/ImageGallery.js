import React from "react";

function ImageGallery() {
    const images = [
    ];

    return (
        <div className="imageGallery">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery item ${index}`} />
            ))}
        </div>
    );
}

export default ImageGallery;