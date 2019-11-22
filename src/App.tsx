import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';
import Game from './components/Game';
import { Player } from './helpers/Player';

const App: React.FC = () => {
  const myPlayer = new Player(
    'player351',
    'b2f9a7baf41f765144c1de20a9e2b0053dec8a1c'
  );
  const [room, setRoom] = useState(myPlayer.currentRoom);
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      {!start ? (
        <Button onClick={() => setStart(true)}>START!</Button>
      ) : (
        <>
          <Game />
          <div>
            {Object.entries(room).map(entry => (
              <li>
                <span>{entry[0]}</span>: <span>{entry[1]}</span>
              </li>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
