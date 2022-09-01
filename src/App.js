import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App(props) {
    const [name] = useState('Julian Alifirman Wardana');
    const [theme, setTheme] = useState('light');

    return (
        <div className="App">
            <Header />
            <Main />
            <Footer name={name} />
        </div>
    );
}

export default App;
