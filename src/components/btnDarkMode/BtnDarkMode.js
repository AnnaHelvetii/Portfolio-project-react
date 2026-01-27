import { useTheme } from '../../utils/ThemeContext.jsx';
import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

const BtnDarkMode = () => {
	const { theme, setTheme } = useTheme();

	const toggleDarkMode = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<button
			className={theme === 'dark'
				? 'dark-mode-btn dark-mode-btn--active'
				: 'dark-mode-btn'}
			onClick={toggleDarkMode}
		>
			<img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
			<img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
		</button>
	);
};

export default BtnDarkMode;