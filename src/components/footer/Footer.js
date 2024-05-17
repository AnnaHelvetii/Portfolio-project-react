import "./style.css"

import vk from "./../../img/icons/vk.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="#!">
								<img src={vk} alt="link" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={linkedIn} alt="link" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={instagram} alt="link" />
							</a>
						</li>
						<li className="social__item">
							<a href="#!">
								<img src={gitHub} alt="link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2024 anna-soboleva-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;