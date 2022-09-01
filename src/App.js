import React from 'react';
import { ThemeContext, themes } from "./contexts/ThemeContext"
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {

    constructor(props) {
    super(props);
    this.setTheme = () => {
        this.setState(state => ({
            theme:
            state.theme === themes.dark
                ? themes.light
                : themes.dark,
        }));
        };

        this.state = {
            name: 'Julian Alifirman Wardana',
            theme: themes.light,
            setTheme: this.setTheme,
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state}>
                <div className="App">
                    <Header />
                    <Main />
                    <Footer name={this.state.name} />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
