import './styles/Contact.css';

const Contact = () => {
  return (
    <>
      <h2 id="contact" className="section-title">
        <p>
          C<span>ontac</span>t
        </p>
      </h2>
      <div className="contact">
        <p className="contact-item">
          <a target="_blank" href="mailto:kalidoss.anandh2023@vitstudent.ac.in">
            email
          </a>
        </p>
        <p className="contact-item">
          <a target="_blank" href="https://in.linkedin.com/in/kalidoss-anandh">
            linkedin
          </a>
        </p>
        <p className="contact-item">
          <a target="_blank" href="https://github.com/kdx-08/">
            github
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
