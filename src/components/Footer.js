import React from 'react';
import { ThemeContext } from "../contexts/ThemeContext"
import './Footer.css';

function Footer(props) {
    const isPasses = props.name;

    if (isPasses) {
        return (
            <ThemeContext.Consumer>
                {({theme, setTheme}) => (
                    <div className='footer' style={{backgroundColor: theme.background, color: theme.color}}>
                        <p>
                            My name is {props.name}, and today I'm learning about react
                        </p>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    } else {
        return (
            <ThemeContext.Consumer>
                {({theme, setTheme}) => (
                    <div className='footer' style={{backgroundColor: theme.background, color: theme.color}}>
                        <p>Today I'm Learning React</p>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}

export default Footer;