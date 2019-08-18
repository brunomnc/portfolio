import React, { Component } from 'react';
import { FaBitbucket } from 'react-icons/fa';
import featuredFile from '../../data/featured';

import { MainText, Featured, Container } from './styles';

class Home extends Component {
  state = {
    featured: featuredFile,
  };

  handleClick = link => {
    window.location.assign(link);
  };

  render() {
    const { featured } = this.state;
    const link = <a href="http://ufsc.br">UFSC</a>;
    return (
      <Container>
        <MainText>
          <strong>What do I do?</strong>
          <span>
            I'm a computer science graduate at {link} in Brazil. I'm passionate
            about AI, robotics and connecting things together.
          </span>
        </MainText>
        <Featured>
          <strong>{featured.name}</strong>
          <p>{featured.description}</p>
          <button type="button" onClick={() => this.handleClick(featured.link)}>
            <div>
              <FaBitbucket size={16} color="#FFF" />
              {'Source code!'}
            </div>
          </button>
        </Featured>
      </Container>
    );
  }
}

export default Home;
