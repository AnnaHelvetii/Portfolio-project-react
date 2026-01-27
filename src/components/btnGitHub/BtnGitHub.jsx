import gitHubBlack from "../../img/socials-icons/github.light.svg";
import gitHubWhite from "../../img/socials-icons/github.dark.svg";
import { useTheme } from "../../utils/ThemeContext";

const BtnGitHub = ({ link }) => {
	const { theme } = useTheme();

	const icon = theme === 'dark' ? gitHubWhite : gitHubBlack;

	return (
		<a
			href={link}
			target="_blank"
			rel="noreferrer"
			className="btn-outline"
		>
			<img src={icon} alt="GitHub" />
			GitHub repo
		</a>
	);
};

export default BtnGitHub;
