import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainText = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px;
  list-style: none;
  align-items: flex-start;
  max-width: 1000px;

  strong {
    text-align: left;
    display: block;
    color: #eee;
    font: 36px Roboto;
    font-weight: 1000;
    margin: 20px 0 50px 0;
    letter-spacing: 4px;
  }

  span {
    color: #eee;
    font: 30px Roboto;
    font-weight: 600;
    line-height: 1.6;
    letter-spacing: 4px;
  }

  a {
    color: #eee;
    font: 30px Roboto;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: ${darken(0.01, '#7152c1')};
    }
  }
`;

export const Featured = styled.div`
  align-content: flex-end;
  margin: 150px 0 0 900px;
  max-width: 900px;
  background: #1e1e1e;
  border-radius: 1px;
  padding: 20px;
  transition: background 0.5s;
  letter-spacing: 2px;
  transition: background 0.5s;
  transition: transform 0.5s;

  &:hover {
    transform: scale(0.98);
  }

  &:hover {
    background: ${lighten(0.05, '#1e1e1e')};
  }

  > strong {
    font-size: 26px;
    line-height: 20px;
    color: #eee;
    margin-top: 15px;
    margin-bottom: 5px;
    font-weight: 900;
  }

  > p {
    font-size: 18px;
    margin: 20px 0 20px;
    color: #eee;
  }

  > span {
    font-size: 25px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: #1e1e1e;
    color: #eee;
    border: 0;
    border-radius: 1px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.05, '#1e1e1e')};
    }

    div {
      display: flex;
      align-itens: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 15px;
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
