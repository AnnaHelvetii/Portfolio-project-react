import { useTheme } from "../../utils/ThemeContext.jsx";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode.js";
import "./nav.css";

const Navbar = () => {
	const { theme } = useTheme();

	const navLinks = [
		{title: 'Home', href: '#home'}, 
		{title: 'Skills', href: '#skills'}, 
		{title: 'Projects', href: '#projects'}, 
		{title: 'Contacts', href: '#contacts'}
	];

	return (
		<nav className="nav">
			<div className="nav__container">
				<div className="nav-row">
					<ul className="nav-list">
						<li className="nav-list__item">
							<img className="nav__logo" src={`/img/logo/${theme}/black-metal-logo.png`} alt="" />
						</li>
						{navLinks.map(link => (
							<li className="nav-list__item" key={link.href}>
								<a href={link.href}>
									{link.title}
								</a>
							</li>
						))}
					</ul>
					<BtnDarkMode />
				</div>
			</div>	
		</nav>
	);
}

export default Navbar;