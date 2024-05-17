import "./style.css"

import project1 from "./../../img/projects/project-1.jpg"

const Project = ({title, img}) => {
	return (
		<li className="project">
			<a href="./project-page.html">
				<img src={img} alt={title} className="img__project"/>
				<h3 className="project__title">{title}</h3>
			</a>
		</li>
	);
}

export default Project;