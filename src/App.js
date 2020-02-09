import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Button>Click Here</Button>
      <Button content='Primary' primary />
      <Button content='Secondary' secondary />
    </div>
  );
}

export default App;
