import React from "react";
import ToggleButton from "./ToogleButton";
import '../components/Header.css';
import '../assets/style.css';

function Header() {
    return (
        <header className='App-header'>
            <p className='header-text'>My App</p>
            <ToggleButton />
        </header>
    );
}

export default Header;