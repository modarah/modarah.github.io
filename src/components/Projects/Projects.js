import React from "react";
import { projects } from "./ProjectsData.js";
import "./ProjectStyles.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="blog-cards">
        {projects.map((project) => {
          const { id, image, title, description, url } = project;
          return (
            <div className="card" key={id}>
              <img className="blog-img" src={image} alt="project-image" />
              <h3 className="card-title">{title}</h3>
              <p className="card-paragraph">{description}</p>
              <a className="card-link" href={url}>
                Code
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
