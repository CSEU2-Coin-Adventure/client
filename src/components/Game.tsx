import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const Game = () => {
  return (
    <Arena>
      <div
        className="dir t"
        style={{
          gridRow: '1/3',
          gridColumn: '2/8'
        }}
      >
        <Icon type="up" />
      </div>
      <div
        className="dir b"
        style={{
          gridRow: '7/-1',
          gridColumn: '2/8'
        }}
      >
        <Icon type="down" />
      </div>
      <div
        className="dir r"
        style={{
          gridRow: '1/-1',
          gridColumn: '8/-1'
        }}
      >
        <Icon type="right" />
      </div>
      <div
        className="dir l"
        style={{
          gridRow: '1/-1',
          gridColumn: '1/2'
        }}
      >
        <Icon type="left" />
      </div>
    </Arena>
  );
};
const Arena = styled.div`
  border: 1px white solid;
  height: 70vh;
  width: 70vw;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  .dir {
    display: grid;
    align-content: center;
    justify-content: center;
    &:hover {
      background-color: #ffc600;
      color: #2a2a2a;
    }
  }
`;

export default Game;
