import React from 'react';
import { Header } from '../03-components/header/header';
import { HomepageHero } from '../03-components/homepageHero/homepageHero';
import { WhoAreWe } from '../03-components/whoAreWe/whoAreWe';
import { Shop } from '../03-components/shop/shop';
import { Gyms } from '../03-components/gyms/gyms';
import { Athletes } from '../03-components/athletes/athletes';
import { Spinner } from '../04-global/spinner';
import { SideMenu } from '../04-global/sideMenu/sideMenu';
import SmoothScroll from 'smooth-scroll';
import BackgroundImageOnLoad from 'background-image-on-load';
import ReadingProgress from '../04-global/ReadingProgress';
import './app.scss'; 


// Initializing smooth scroll module
var scroll = new SmoothScroll('a[href*="#"]');


class App extends React.Component {
  state = {
    homepage: [],
    bgIsLoaded: false
  }
  // Pulling the data from the wordpress rest api
  componentDidMount() {
    fetch('https://paincave-api.marcusjh.co.uk/wp-json/wp/v2/pages/?slug=homepage')
    .then(res => res.json())
    .then((data) => {
      this.setState({ homepage: data })
    })
    .catch(console.log)
  }

  render () {

    // Setting 
    const target = React.createRef();

    // Setting api variables for use 
    var athleteImg
    var aboutBg

    // Looping over homepage api and grabbing acf field to store in variable
    this.state.homepage.forEach(element => {
    athleteImg = element.acf.athlete_img
    aboutBg = element.acf.about_bg
    });

    // Setting about section bg styling
    var aboutSectionStyle = {
      backgroundImage: `url(${aboutBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      opacity: '0.3',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      zIndex: -1 
    }

    // creating a variable which will be dynamically changed to show or hide the spinner
    var SpinnerHandler = '';

    // Controlling body based on state
    const body = document.getElementById('root')
    body.classList.add('fixed', 'w-full')

    // conditional statement to check wether the state has been updated from the image load
    if((this.state.bgIsLoaded === true)) {
      SpinnerHandler = 'hidden'
      body.classList.remove('fixed', 'w-full')
    } else {
      SpinnerHandler = ''
    };

    return (  
      <React.Fragment>

        <div className={SpinnerHandler}>
          <Spinner
          bgState={this.state.bgIsLoaded}
          />
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
              data={this.state.homepage}
              state={this.state}
             />
          </section>

          {/** ABOUT */}
          <section id="about" className="h-screen relative block">
            <WhoAreWe/>
            {/** About section background */}
            <div style={aboutSectionStyle}></div>
          </section>

          {/** SHOP */}
          <section id="shop" className="h-screen">
            <Shop/>
          </section>

          {/** GYM */}
          <section id="gym" className="h-screen">
            <Gyms/>
          </section>

          {/** ATHLETES */}
          <section id="athletes" className="h-screen relative">
            <Athletes/>
          </section>
        </main>

        {/* Using the import to set a src image to be checked for load | adjusting state once loaded */}
        <BackgroundImageOnLoad
            src={athleteImg}
            onLoadBg={() =>
              this.setState({
              bgIsLoaded: true
            })}
            onError={err => console.log('error', err)}
          />
      </React.Fragment>
    );
  }
}

export default App;
