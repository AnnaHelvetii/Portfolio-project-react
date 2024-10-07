import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
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
							<NavLink to="/" className={({isActive}) => isActive ? activeLink : commonLink}>
								Home
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/projects" className={({isActive}) => isActive ? activeLink : commonLink}>
								Projects
							</NavLink>
						</li>
						<li className="nav-list__item">
							<NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : commonLink}>
								Contacts
							</NavLink>
						</li>
					</ul>
					<BtnDarkMode />
				</div>
			</div>	
		</nav>
	);
}

export default Navbar;