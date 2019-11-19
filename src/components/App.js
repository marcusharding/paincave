import React from 'react';
import Header from './header';

class App extends React.Component {
  render() {
    return (
        <header className="bg-primary flex flex-col w-full h-screen mx-auto items-center justify-center header">
          <h1 className="text-white">PAINCAVE</h1>
        </header>
    );
  }
}

export default App;
