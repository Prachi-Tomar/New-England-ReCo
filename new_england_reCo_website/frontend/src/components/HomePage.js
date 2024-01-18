import React from "react";
import Banner from "./Banner";
import ImageGallery from "./ImageGallery";

function HomePage() {
    return (
      <div className="homePage" align="center">
        <Banner />
        <ImageGallery />
      </div>
   )
}

export default HomePage;