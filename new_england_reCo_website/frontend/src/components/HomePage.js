import React from "react";
import Banner from "./Banner";
import ImageGallery from "./ImageGallery";
import SearchBar from "./SearchBar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";

function HomePage() {
    return (
      <div className="homePage" align="center">
        <Banner />
        <SearchBar />
        <ImageGallery />
        <AboutUs />
        <Footer />
      </div>
   )
}

export default HomePage;