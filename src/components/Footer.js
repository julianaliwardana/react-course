import { React, Component } from 'react';
import './Footer.css';

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

class Footer extends Component {
    render() {
        const isPasses = this.props.name;

        if (isPasses) {
            return <UserGreeting name={this.props.name}/>;
        } else {
            return <BotGreeting/>;
        }
    }
}

export default Footer;