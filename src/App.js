import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ToDo from './ToDo';

function App() {
  const [view, setView] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width="100"
          height="100"
        />
      </header>
      <div>
        <div>
          <div className="App-btn-group">
            <button onClick={() => setView(0)}>Counter View</button>
            <button onClick={() => setView(1)}>Todo View</button>
          </div>
        </div>
        <div>
          {view === 0 && <Counter />}
          {view === 1 && <ToDo />}
        </div>
      </div>
    </div>
  );
}

export default App;
