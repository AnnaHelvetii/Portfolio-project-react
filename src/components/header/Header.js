import "./style.css";

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Anna</em>
					</strong>
					<br />
					a frontend developer
				</h1>
				<div className="header__text">
					<p>There are some my works</p>
				</div>
				<a href="https://github.com/AnnaHelvetii" className="btn">View GITHUB profile</a>
			</div>
		</header>
	);
}

export default Header;