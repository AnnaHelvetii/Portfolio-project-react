import { createContext, useContext, useEffect, useState } from 'react';
import detectDarkMode from './detectDarkMode';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('darkMode') || detectDarkMode();
	});

	useEffect(() => {
		localStorage.setItem('darkMode', theme);
		document.body.classList.toggle('dark', theme === 'dark');
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeContext);
