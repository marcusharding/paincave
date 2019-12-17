import React from 'react';
import { Fragment } from 'react';
import Header from '../03-components/header/header';
import HomepageHero from '../03-components/homepageHero/homepageHero';
import SmoothScroll from 'smooth-scroll';
import './app.scss'; 
import athlete from '../../assets/img/header_athlete.png';
import Spinner from '../04-global/spinner';
import BackgroundImageOnLoad from 'background-image-on-load';
import ReadingProgress from '../04-global/ReadingProgress';

var scroll = new SmoothScroll('a[href*="#"]');


class App extends React.Component {
  state = {
    homepage: [],
    bgIsLoaded: false
  }
  // Pulling the data from the CMS
  componentDidMount() {
    fetch('https://paincave-api.marcusjh.co.uk/wp-json/wp/v2/pages/?slug=homepage')
    .then(res => res.json())
    .then((data) => {
      this.setState({ homepage: data })
    })
    .catch(console.log)
  }

  render () {
    // Setting a constant variable for the state
  // const { bgIsLoaded } = this.state;
  // creating a variable to adjust wether spinner is shown or not
  var SpinnerHandler = '';

  // conditional statement to check wether the state has been updated from the image load
  if((this.state.bgIsLoaded === true)) {
    SpinnerHandler = 'hidden'
  } else {
    SpinnerHandler = ''
  };

  const target = React.createRef();
    return (  
      <Fragment>
        <div className={SpinnerHandler}>
          <Spinner />
        </div>
        {/** HEADER */}
        <Header
         bgState={this.state.bgIsLoaded}
        />
        <main id="main" className="app" ref={target}>
        <ReadingProgress target={target} />
          {/** HOMPAGE HERO */}
          <section id="hero">
            <HomepageHero
              homepage={this.state.homepage}
              state={this.state}
             />
          </section>
          {/** ABOUT */}
          <section id="about" className="h-screen aboutBg">
            
          </section>

          {/** SHOP */}
          <section id="shop" className="h-screen">
            
          </section>

          {/** GYM */}
          <section id="gym" className="h-screen">
            
          </section>

          {/** ATHLETES */}
          <section id="athletes" className="h-screen">
            
          </section>
        </main>

        {/* Using the import to set a src image to be checked for load | adjusting state once loaded */}
        <BackgroundImageOnLoad
            src={athlete}
            onLoadBg={() =>
              this.setState({
              bgIsLoaded: true
            })}
            onError={err => console.log('error', err)}
          />
      </Fragment>
    );
  }
}

export default App;
