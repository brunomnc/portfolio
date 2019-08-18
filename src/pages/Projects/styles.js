import styled from 'styled-components';
import { lighten } from 'polished';

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  list-style: none;
  align-items: flex-start;
  letter-spacing: 2px;

  li {
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    border-radius: 1px;
    padding: 20px;
    transition: background 0.5s;

    &:hover {
      background: ${lighten(0.05, '#1e1e1e')};
    }

    img {
      align-self: center;
      max-width: 400px;
      min-height: 100px;
      max-height: 400px;
    }

    > strong {
      font-size: 22px;
      line-height: 20px;
      color: #eee;
      margin-top: 15px;
      margin-bottom: 5px;
    }

    > p {
      font-size: 15px;
      margin: 5px 0 20px;
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
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      max-width: 500px;

      &:hover {
        background: ${lighten(0.05, '#1e1e1e')};
      }

      div {
        display: flex;
        align-itens: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
