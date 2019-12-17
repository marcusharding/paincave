import React from 'react';
import '../../../styles/main.scss';
import './homepageHero.scss';
import athlete from '../../../assets/img/header_athlete.png';

class HomepageHero extends React.Component {

  render(){
        return (
            <React.Fragment>
              <div className="w-full h-screen relative">
                  <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={require('../../../assets/img/homepage_header.jpg')}></img>
                  <div className="h-full w-full wrapper justify-center flex flex-col items-center">
                      <div className="absolute headerAthlete flex justify-center">
                          <div className="w-full h-full relative aspect-ratio">
                              <img className={`absolute inset-0 object-cover w-full h-full lg:z-10 ${this.props.state.bgIsLoaded ? 'fade-in': null}`} alt="" src={athlete}></img>
                          </div>
                      </div>
                      <div className="">
                          <p className={`uppercase text-offWhite text-3xl lg:text-9xl font-bold ${this.props.state.bgIsLoaded ? 'fade-in-extended': ''}`}><span className="lg:mx-24">lorem</span> <span className="lg:mx-24">ipsum</span></p>
                          <p className={`uppercase text-primary text-3xl lg:text-9xl font-bold text-center ${this.props.state.bgIsLoaded ? 'fade-in-extended': ''}`}><span className="lg:mx-32">sit</span> <span className="lg:ml-40">dolor</span></p>
                      </div>
                  </div>
              </div>
            ))}
        </React.Fragment>
        )
    }
}

export default HomepageHero;