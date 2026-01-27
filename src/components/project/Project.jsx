import "./project.css";

const Project = ({title, img, index}) => {
	return (
		<a href={`/project-page/${index}`}>
			<div className="project-card">
				<div className="project-card__content">
					<img src={img} alt="" className="img__project"/>
				</div>
				<h3 className="project__title">{title}</h3>
			</div>
		</a>
	);
}

export default Project;