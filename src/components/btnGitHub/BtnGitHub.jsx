import { useTheme } from "../../utils/ThemeContext";
import './btn-github.css';

const BtnGitHub = ({ link, innerText, showIcon = true }) => {
	const { theme } = useTheme();
	const gitHubWhite = "/img/socials-icons/dark/github.svg";
	const gitHubBlack = "/img/socials-icons/light/github.svg";

	const icon = theme === 'dark' ? gitHubWhite : gitHubBlack;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="btn btn-github"
		>
			{showIcon && (
				<img src={icon} alt="GitHub" />
			)}
			{innerText}
		</a>
	);
};

export default BtnGitHub;
