import './styles/Terminal.css';

const Terminal = () => {
  return (
    <div className="about">
      <div className="header">
        <div className="button"></div>
        <div className="button"></div>
        <div className="button"></div>
      </div>
      <div className="content">
        <div className="content-item">
          <p className="input">&#62; me.location</p>
          <p className="output">"Chennai, TN"</p>
        </div>
        <div className="content-item">
          <p className="input">&#62; me.contact</p>
          <p className="output">
            ["
            <span className="link">
              <a target="_blank" href="mailto:kalidoss.anandh2023@vitstudent.ac.in">
                email
              </a>
            </span>
            ", "
            <span className="link">
              <a target="_blank" href="https://github.com/kdx-08">
                github
              </a>
            </span>
            ", "
            <span className="link">
              <a target="_blank" href="https://in.linkedin.com/in/kalidoss-anandh">
                linkedin
              </a>
            </span>
            "]
          </p>
        </div>
        <div className="content-item">
          <p className="input">&#62; me.resume</p>
          <p className="output">
            "
            <span className="link">
              <a target="_blank" href="resume.pdf" download>
                resume.pdf
              </a>
            </span>
            "
          </p>
        </div>
        <div className="content-item">
          <p className="input">&#62; me.education</p>
          <p className="output">
            "B.Tech Electronics and Computer Engineering - Vellore Institute of Technology, Chennai"
          </p>
        </div>
        <div className="content-item">
          <p className="input">&#62; me.skills</p>
          <p className="output">
            ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Python"]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
