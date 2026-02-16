import './projects.css';
import Project from '../project/Project';
import projects
from '../../helpers/projectsList';

const Projects = ({ id }) => {
	return (
		<section className="section projects-section" id={id} >
			<div className="gradient-default gradient-projects__1"></div>
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map((project) => (
						<li key={project.id}>
							<Project
								title={project.title} 
								skills={project.skills} 
								description={project.description} 
								gitHubLink={project.gitHubLink}
								projectLink={project.projectLink}
								year={project.year}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Projects;