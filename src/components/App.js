import React from 'react';
import Header from './header';

class App extends React.Component {
  render() {
    return (
        <header className="bg-primary flex flex-col w-full h-screen mx-auto items-center justify-center header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    );
  }
}

export default App;
