import React from 'react';
import { Fragment } from 'react';
import Header from '../03-components/header/header';
import HomepageHero from '../03-components/homepageHero/homepageHero';
import './app.scss'; 


class App extends React.Component {
  state = {
    homepage: []
  }
  componentDidMount() {
    fetch('https://paincave-api.marcusjh.co.uk/wp-json/wp/v2/pages/?slug=homepage')
    .then(res => res.json())
    .then((data) => {
      this.setState({ homepage: data })
    })
    .catch(console.log)
  }
  render () {
    return (
      
      <Fragment>
        {/** HEADER */}
        <Header/>
        <main id="main" className="app">
          {/** HOMPAGE HERO */}
          <section>
            <HomepageHero
              homepage={this.state.homepage}
             />
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
        </main>
      </Fragment>
    );
  }
}

export default App;
