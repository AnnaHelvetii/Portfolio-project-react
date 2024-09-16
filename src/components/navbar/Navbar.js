import { NavLink } from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

const Navbar = () => {

	const activeLink = "nav-list__link nav-list__link--active";
	const commonLink = "nav-list__link";

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>MY</strong>PORTFOLIO
					</NavLink>

					<BtnDarkMode />

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
				</div>
			</div>	
		</nav>
	);
}

export default Navbar;