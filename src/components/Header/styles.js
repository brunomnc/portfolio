import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0 100px 0;

  }
`;

export const MenuItems = styled.div`
  display: flex;
  justify-items: baseline;
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  letter-spacing: 3px;

  strong {
    display: block;
    color: #eee;
    margin: 0 0 0 10px;
    font-size: 36px;
    transition: color 0.5s;

    &:hover {
      color: ${darken(0.01, '#7152c1')};
    }
  }
`;

export const Menu = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  margin: 0 50px 0 50px;

  strong {
  text-align: right;
  display: block;
  color: #eee;
  font: 24px Roboto;
  transition: color 0.5s;

  &:hover {
    color: ${darken(0.01, '#7152c1')};
  }


  span {
    font-size: 12px;
    color: #eee;
  }

`;
