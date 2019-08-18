import React from 'react';

import { Container, Menu, Title, MenuItems } from './styles';
import giraffe from '../../assets/giraffe.svg';

export default function Header() {
  return (
    <Container>
      <Title to="/">
        <img src={giraffe} alt="My Page" width="100px" height="100px" />
        <strong>BRUNO PUSCHNERAT MANICA</strong>
      </Title>
      <MenuItems>
        <Menu to="/projects">
          <strong>WORK</strong>
        </Menu>
        <Menu to="/error">
          <strong>ABOUT</strong>
        </Menu>
        <Menu to="/error">
          <strong>CONTACT</strong>
        </Menu>
      </MenuItems>
    </Container>
  );
}
