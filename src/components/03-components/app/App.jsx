import React from 'react';
import Header from '../header/header';
import HomepageHero from '../homepageHero/homepageHero';
import './app.scss';

class App extends React.Component {
  render() {
    return ( 
      <div className="app">
        {/** HEADER */}
        <Header />

        {/** HOMPAGE HERO */}
        <section>
          <HomepageHero />
        </section>

        {/** ABOUT */}
        <section className="h-screen aboutBg">
          
        </section>

        {/** SHOP */}
        <section className="h-screen">
          
        </section>

        {/** GYM */}
        <section className="h-screen">
          
        </section>

        {/** ATHLETES */}
        <section className="h-screen">
          
        </section>
      </div>
    );    
  }
}

export default App;
