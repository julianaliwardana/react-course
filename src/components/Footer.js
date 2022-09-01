import React from 'react';
import './Footer.css'

function UserGreeting(props) {
    return (
        <div>
            <p>
                My name is {props.name}, and today I'm learning about react
            </p>
        </div>
    );
}

function BotGreeting() {
    return (
        <div>
            <p>
                Today I'm Learning React
            </p>
        </div>
    );
}

function Footer(props) {
        console.log('====================================');
        console.log(props.name);
        console.log('====================================');
        const isPasses = props.name;

        if (isPasses) {
            return <UserGreeting name={props.name}/>;
        } else {
            return <BotGreeting />;
        }
}

export default Footer;