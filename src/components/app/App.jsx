import React from 'react';
import { Fragment } from 'react';
import Header from '../03-components/header/header';
import HomepageHero from '../03-components/homepageHero/homepageHero';
import './app.scss'; 


class App extends React.Component {
  render () {
    return (
      
      <Fragment>
        <div className="app">
          
          {/** HEADER */}
          <Header
           />
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
      </Fragment>
    );
  }
}


export default App;
