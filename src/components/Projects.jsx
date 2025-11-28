import projects from "./projects.json";
import Project from "./Project";

const Projects = () => {
  return (
    <div>
      <h2 id="projects" className="section-title">
        <p>
          P<span>roject</span>s
        </p>
      </h2>
      <div className="projects">
        {projects.map((p, index) => (
          <Project key={index} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
