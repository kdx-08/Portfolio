import { useEffect } from 'react';
import './styles/Intro.css';

const Intro = () => {
  useEffect(() => {
    const cursor = document.querySelector('.name');
    let toggle = true;
    const intervalID = setInterval(() => {
      cursor.style.borderRightColor = toggle ? 'transparent' : '#747fe0';
      toggle = !toggle;
    }, 500);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="intro">
      <p className="name">&gt; Kalidoss Anandh</p>
      <p className="description">
        Hey there! I am web developer, and my passion is to build simple and beautiful user
        experiences. Check out my <a href="#projects">projects</a>
      </p>
    </div>
  );
};

export default Intro;
