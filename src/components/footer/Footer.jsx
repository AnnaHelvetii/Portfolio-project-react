import "./footer.css"
import SocialIconsBlock from "../social-icons/SocialIconsBlock";
import BtnGitHub from "../btnGitHub/BtnGitHub";
import { useMediaQuery } from "../../utils/useMediaQuery";

const Footer = () => {
	const year = new Date().getFullYear();
	const isMobile = useMediaQuery("(max-width: 620px)");

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="copyright">
						<p>{`© ${year} soboleva-anna.ru`}</p>
					</div>
					{isMobile ? (
						<BtnGitHub link='https://t.me/anna_helvetii' innerText="Contact me" showIcon={false} />
					) : (
						<SocialIconsBlock /> 
					)}
				</div>
			</div>
		</footer>
	);
}

export default Footer;