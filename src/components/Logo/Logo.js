import React from "react";
import "./Logo.css"
import logo from "../Logo/simple_repeat_logo.png"

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo" />
        </div>
    );
}

export default Logo;