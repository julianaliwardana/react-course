import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import styles from '../assets/text.module.css';
import '../App.css';
import '../assets/style.css';
import MyData from './MyData';

function Main() {
    const [count, setCount] = useState(0);
    const [name] = useState('Julian Alifirman Wardana');

    useEffect(() => {
        document.title = `${count} ${name}`;
    });

    return (
        <div className="App-main">
            <div className="left">
                <img src={logo} className="App-logo" alt="logo" />
                <p className={styles.name}>
                    Hello my name is <br/> {name}
                </p>
                <p>
                    {count}
                </p>
                <div>
                    <button onClick={() => setCount(count - 1)}>Decrease</button>
                    <button onClick={() => setCount(count + 1)}>Incerease</button>
                </div>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
                </a>
            </div>
            <div className="right">
                <MyData />
            </div>
        </div>
    );
}

export default Main;