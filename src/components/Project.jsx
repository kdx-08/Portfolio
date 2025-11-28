import "./styles/Project.css";

const Project = ({ project }) => {
  return (
    <div className="project-item">
      <p className="title">{project.name}</p>
      <p className="project-desc">{project.description}</p>
      <div className="tech-stack">
        <ul>
          {project.stack.map((t, index) => (
            <li key={index}>{t}</li>
          ))}
        </ul>
      </div>
      <a target="_blank" href={project.source} className="view-source">
        View Source
      </a>
    </div>
  );
};

export default Project;
