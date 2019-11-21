import React, { useState } from 'react';
import { Button } from 'antd';
import './App.css';
import Game from './components/Game';

const App: React.FC = () => {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
      {!start ? (
        <Button onClick={() => setStart(true)}>START!</Button>
      ) : (
        <Game />
      )}
    </div>
  );
};

export default App;
