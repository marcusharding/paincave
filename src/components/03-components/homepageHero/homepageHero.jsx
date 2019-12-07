import React from 'react';
import '../../../styles/main.scss';
import './homepageHero.scss';
import athlete from '../../../assets/img/header_athlete.png';
import Spinner from '../../04-global/spinner';
import BackgroundImageOnLoad from 'background-image-on-load';

class HomepageHero extends React.Component {

    // Setting state to false
  state = {
    bgIsLoaded: false
  };

  render(){
      // Setting a constant variable for the state
    const { bgIsLoaded } = this.state;
    // creating a variable to adjust wether spinner is shown or not
    var SpinnerHandler = '';

    // conditional statement to check wether the state has been updated from the image load
    if((this.state.bgIsLoaded === true)) {
      SpinnerHandler = 'spinner'
    } else {
      SpinnerHandler = 'spinner spinner--active'
    };
        return (
            <React.Fragment>

            <div className={SpinnerHandler}>
            <Spinner />
            </div>

            <div className="w-full h-screen relative">
                <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={require('../../../assets/img/homepage_header.jpg')}></img>
                <div className="h-full w-full wrapper justify-center flex flex-col items-center">
                    <div className="absolute headerAthlete flex justify-center">
                        <div className="w-full h-full relative aspect-ratio">
                            <img className="absolute inset-0 object-cover w-full h-full lg:z-10" alt="" src={athlete}></img>
                        </div>
                    </div>
                    <div className="z-10 lg:z-0">
                        <p className="uppercase text-offWhite text-3xl lg:text-6xl"><span className="lg:mx-24">lorem</span> <span className="lg:mx-24">ipsum</span></p>
                        <p className="uppercase text-primary text-3xl lg:text-6xl"><span className="lg:mx-24">sit</span> <span className="lg:mx-24">dolor</span></p>
                    </div>
                </div>
            </div>
            ))}

            {/* Using the import to set a src image to be checked for load | adjusting state once loaded */}
        <BackgroundImageOnLoad
            src={athlete}
            onLoadBg={() =>
              this.setState({
              bgIsLoaded: true
            })}
            onError={err => console.log('error', err)}
          />
        </React.Fragment>
        )
    }
}

export default HomepageHero;