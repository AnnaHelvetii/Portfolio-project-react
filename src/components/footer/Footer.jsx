import "./footer.css"
import socialsList from "../../helpers/socialsList";
import { useTheme } from "../../utils/ThemeContext";
import { socialIcons } from "../../helpers/socialsList";

const Footer = () => {
	const { theme } = useTheme();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						{socialsList.map(social => (
							<li className="social__item" key={social.id}>
								<a href={social.href} target="_blank" rel="noreferrer">
									<img src={socialIcons[theme][social.icon]} alt={social.title} />
								</a>
							</li>
						))}
					</ul>
					<div className="copyright">
						<p>© 2026 soboleva-anna.ru</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;