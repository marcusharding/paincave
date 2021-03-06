import React from 'react'
import { Header } from './components/03-components/header/header'
import { HomepageHero } from './components/03-components/homepageHero/homepageHero'
import { WhoAreWe } from './components/03-components/whoAreWe/whoAreWe'
import { Shop } from './components/03-components/shop/shop'
import { Gyms } from './components/03-components/gyms/gyms'
import { Athletes } from './components/03-components/athletes/athletes'
import { Spinner } from './components/04-global/spinner'
import { Footer } from './components/04-global/footer'
import SmoothScroll from 'smooth-scroll'
import BackgroundImageOnLoad from 'background-image-on-load'
import ReadingProgress from './components/04-global/ReadingProgress'
import "animate.css/animate.min.css"
import './tailwind.css'
import gymBg from './assets/img/rope.jpg'


// Initializing smooth scroll module
let scroll = new SmoothScroll('a[href*="#"]');


class App extends React.Component {

  constructor(props) {
    super(props)
    
    this.state = {
    homepage: [],
    bgIsLoaded: false,
    mobileModalActive: false,
    desktopModalActive: false
  }
 
    this.onDesktopModalClick = this.onDesktopModalClick.bind(this);
    this.onMobileModalClick = this.onMobileModalClick.bind(this);
  }

  // Pulling the data from the wordpress rest api
  componentDidMount() {
    fetch('https://paincave-api.marcusjh.co.uk/wp-json/wp/v2/pages/?slug=homepage')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ homepage: data })
    })
    .catch(console.log)
  }


  // Changing modalActive state onClick
  onMobileModalClick = () => {
    this.setState((prevState) => {
      return { mobileModalActive: !prevState.mobileModalActive };
    });

    document.body.style.overflow = 'hidden';

    if(this.state.mobileModalActive === true){
      document.body.style.overflow = 'unset';
    }
  }

  onDesktopModalClick = () => {
    this.setState((prevState) => {
      return { desktopModalActive: !prevState.desktopModalActive };
    });
  }

  render () {

    // Setting 
    const target = React.createRef();

    // Setting api variables for use 
    let athleteImg = ''
    let aboutBg = ''

    // Looping over homepage api and grabbing acf field to store in variable
    this.state.homepage.forEach(element => {
    athleteImg = element.acf.athlete_img
    aboutBg = element.acf.about_bg
    });

    // Setting about section bg styling
    let aboutSectionStyle = {
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

    // Setting gym section bg styling
    let gymSectionStyle = {
      backgroundImage: `url(${gymBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      opacity: '0.3',
      top: 0,
      bottom: 0,
      right: 0,
      position: 'absolute',
      zIndex: -1, 
      width: '35%'
    }

    const modalActiveStyle = {
      filter: `blur(10px)`
    }

    // creating a variable which will be dynamically changed to show or hide the spinner
    let SpinnerHandler = '';

    // Controlling body based on state
    const body = document.getElementById('root')
    body.classList.add('fixed', 'w-full')

    // conditional statement to check wether the state has been updated from the image load
    if((this.state.bgIsLoaded === true)) {
      SpinnerHandler = 'hidden'
      body.classList.remove('fixed', 'w-full')
    };

    return (  
      <React.Fragment>
         {/* The loading spinner dynamically displayed by the 'SpinnerHandler'
         variable controlled based on the loading of the athlete image */}
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
             <HomepageHero
               data={this.state.homepage}
               state={this.state}
              />

           {/** ABOUT */}
           <section id="about" className="lg:h-screen relative block py-12 flex justify-center items-center ">
             <WhoAreWe
              data={this.state.homepage}
            />
            {/* * About section background */}
            <div style={aboutSectionStyle}></div>
          </section>

           {/** SHOP */}
           <section id="shop" className="lg:h-screen py-12">
             <Shop
               data={this.state.homepage}
             />
           </section>

           {/** GYM */}
           <section style={this.state.mobileModalActive === true ? modalActiveStyle : null} id="gym" className="lg:h-screen relative py-12 flex justify-center items-center">
             <Gyms
               data={this.state.homepage}
             />
             {/* * About section background */}
            <div style={gymSectionStyle}></div>
           </section>

           {/** ATHLETES */}
           <section id="athletes" className="lg:h-screen relative mb-12 py-12 lg:py-0">
             <Athletes
               mobileModalActive={this.state.mobileModalActive}
               onMobileModalClick={this.onMobileModalClick}
               desktopModalActive={this.state.desktopModalActive}
               onDesktopModalClick={this.onDesktopModalClick}
               modalActiveStyle={modalActiveStyle}
             />
           </section>
         </main>

        <div style={this.state.mobileModalActive === true ? modalActiveStyle : null}>
         <Footer/>
        </div>

         {/* Using the import to set a src image to be checked for load | adjusting state once loaded */}
         <BackgroundImageOnLoad
             src={athleteImg}
             onLoadBg={() =>
               this.setState({
               bgIsLoaded: true
             })}
           />
      </React.Fragment>
    );
  }
}

export default App;
