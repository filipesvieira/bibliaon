import { createContext, useState, useCallback, useContext } from 'react';
import AppTheme from './themes';
const ThemeContext = createContext({});

const useThemeState = () => {
    const initialState = AppTheme.light
    const [stateTheme, setState] = useState(initialState);
    const actionsTheme = useCallback(getActions(setState, [setState]));
    return { stateTheme, actionsTheme };
};

const useThemeContext = () => {
    return useContext(ThemeContext);
};

const getActions = setState => ({
    setTheme(data) {
        setState((stateTheme) => {
            return(data);
        })
    },
});

export { ThemeContext, useThemeState, useThemeContext };
