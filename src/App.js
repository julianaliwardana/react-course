import React, { useState } from 'react';
// import styled from "styled-components";
import logo from './logo.svg';
import styles from './assets/text.module.css';
import './App.css';
import './assets/style.css';

// const BtnIncrease = styled.button`
//     background: ${props => props.primary ? "#59CE8F" : "white"};
//     color: ${props => props.primary ? "white" : "#59CE8F"};

//     cursor: pointer;
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid #59CE8F;
//     border-radius: 3px;
// `;

// const BtnDecrease = styled.button`
//     background: ${props => props.primary ? "#FF1E00" : "white"};
//     color: ${props => props.primary ? "white" : "#FF1E00"};

//     cursor: pointer;
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid #FF1E00;
//     border-radius: 3px;
// `;

function App() {
    const [count, setCount] = useState(0);
    const [name] = useState('Julian Alifirman Wardana');

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className={styles.name}>
                Hello my name is {name}
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
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
    );
}

export default App;
