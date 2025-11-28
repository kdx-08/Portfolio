import "./styles/Contact.css";

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
          <a target="_blank" href="mailto:kavin.anandh@outlook.com">
            email
          </a>
        </p>
        <p className="contact-item">
          <a target="_blank" href="https://in.linkedin.com/in/kavin-anandh">
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
