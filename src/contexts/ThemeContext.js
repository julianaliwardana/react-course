import React from 'react';

export const themes = {
    light: {
        color: '#000000',
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        color: '#ffffff',
        foreground: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    setTheme: () => {}
});