import React from "react";
import './Header.css';
import imageSrc from './download.jpg';


function Header () {
    return (
        <div class ="headerContainer">
        <h1> Quotes for the day </h1>
        <img src={imageSrc} alt="Description of the image" className="centeredImg wBorderandShadow" />
        </div>
    )
}

export default Header;