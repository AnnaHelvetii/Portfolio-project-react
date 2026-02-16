import './social-icons.css';
import { socialsList, socialIcons } from "../../helpers/socialsList";
import { useTheme } from "../../utils/ThemeContext";

const SocialIconsBlock = () => {
	const { theme } = useTheme();

	return (
		<ul className="social">
			{socialsList.map(social => (
				<li className="social__item btn btn-social" key={social.id}>
					<a href={social.href} target="_blank" rel="noreferrer">
						<img src={socialIcons[theme][social.icon]} alt="link" />
					</a>
				</li>
			))}
		</ul>
	)
}

export default SocialIconsBlock;