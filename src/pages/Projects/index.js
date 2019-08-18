import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ProjectList } from './styles';
import projectsFile from '../../data/projects';

class Projects extends Component {
  state = {
    projects: projectsFile,
  };

  handleClick = link => {
    window.location.assign(link);
  };

  render() {
    const { projects } = this.state;
    return (
      <ProjectList>
        {projects.map(project => (
          <li key={project.id}>
            <strong>{project.name}</strong>
            <p>{project.description}</p>
            <button
              type="button"
              onClick={() => this.handleClick(project.link)}
            >
              <div>
                <FaGithub size={18} color="#FFF" /> {}
              </div>
              <span>{project.link}</span>
            </button>
          </li>
        ))}
      </ProjectList>
    );
  }
}

export default Projects;
