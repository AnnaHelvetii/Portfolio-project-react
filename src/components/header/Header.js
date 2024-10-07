import "./header.css";
import gitHubWhite from "./../../img/icons/gitHub.svg"

const Header = () => {
	return (
		<header className="header">
			<div className="header__wrapper">
				<div className="section__greetings-button">
					<h1 className="header__title">
						<strong>
							I'm <em>Anna</em>. Web developer
						</strong>
					</h1>
					<div className="header__text">
						<p>There are some my works</p>
					</div>
					<a 
						href="https://github.com/AnnaHelvetii" 
						target="_blank" 
						rel="noreferrer" 
						className="btn">
						View GITHUB profile
						<img src={gitHubWhite} alt="" />
					</a>
				</div>
				<div className="section-skills">		
					<div className="container">
						<ul className="skills-list">
							<li className="skills-list__item">
								<h2 className="title-2">Frontend</h2>
								<p>JavaScript, TypeScript, ReactJS, NextJS, Redux, HTML, CSS, SCSS</p>			
							</li>
							<li className="skills-list__item">
								<h2 className="title-2">Other</h2>
								<p>Git, Figma</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;