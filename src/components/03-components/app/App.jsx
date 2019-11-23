import React from 'react';
import Header from '../header/header';
import HomepageHero from '../homepageHero/homepageHero';

class App extends React.Component {
  render() {
    return ( 
      <div className="app">
        <Header />
        <HomepageHero />
      </div>
    );    
  }
}

export default App;
