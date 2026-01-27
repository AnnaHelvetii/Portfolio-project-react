import BtnDarkMode from "../btnDarkMode/BtnDarkMode.js";
import "./nav.css";

const Navbar = () => {

	const activeLink = "nav-list__link nav-list__link--active";
	const commonLink = "nav-list__link";

	return (
		<nav className="nav">
			<div className="nav__container">
				<div className="nav-row">
					<ul className="nav-list">
						<li className="nav-list__item">
							Home
						</li>
						<li className="nav-list__item">
							Projects
						</li>
						<li className="nav-list__item">
							Contacts
						</li>
					</ul>
					<BtnDarkMode />
				</div>
			</div>	
		</nav>
	);
}

export default Navbar;