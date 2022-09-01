import { ThemeContext } from "../contexts/ThemeContext";
import './ToggleButton.css'

function ToggleButton() {
    return (
        <ThemeContext.Consumer>
        {({theme, setTheme}) => (
            <button
            className='toggle'
            onClick={setTheme}
            style={{backgroundColor: theme.background, color: theme.color}}>
            Toggle Theme
            </button>
        )}
        </ThemeContext.Consumer>
    );
}

export default ToggleButton;