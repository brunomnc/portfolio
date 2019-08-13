import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { ProjectList } from './styles';
import projects from '../../static/projects';

class Home extends Component {
  handleClick = link => {
    window.location.assign(link);
  };

  render() {
    return (
      <ProjectList>
        {projects.map(project => (
          <li key={project.id}>
            <img src={project.image} alt={project.name} />
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

export default Home;
