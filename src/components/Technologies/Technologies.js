import React from "react";
import { DiFirebase, DiReact, DiWindows } from "react-icons/di";
import "./TechnologiesStyles.css";

const Technologies = () => {
  return (
    <div className="technologies" id="technologies">
      <h2 className="section-title">Technologies</h2>
      <ul className="tech-cards">
        <li className="list-item">
          <picture>
            <DiReact className="tech-logo" />
          </picture>
          <h3 className="list-title">Front-End</h3>
          <p className="list-paragraph">HTML, CSS, React.js</p>
        </li>
        <li className="list-item">
          <picture>
            <DiFirebase className="tech-logo" />
          </picture>
          <h3 className="list-title">Back-End</h3>
          <p className="list-paragraph">C#, PHP, Java - Coming soon.</p>
        </li>
        <li className="list-item">
          <picture>
            <DiWindows className="tech-logo" />
          </picture>
          <h3 className="list-title">Windows Server</h3>
          <p className="list-paragraph">Windows Server 2016/2019 administration.</p>
        </li>
      </ul>
    </div>
  );
};

export default Technologies;
