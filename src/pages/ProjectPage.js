import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import imgP from "./../img/projects/project-1-big.jpg"

const ProjectPage = () => {
	return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">My Project 1</h1>
					<img src={imgP} alt="" className="project-details__cover" />
					<div className="project-details__desc">
						<p>Skills: React, Vite, Node.js, TypeScript</p>
					</div>
					<BtnGitHub link="https://github.com/AnnaHelvetii" />
				</div>
			</div>
		</main>
	);
}

export default ProjectPage;