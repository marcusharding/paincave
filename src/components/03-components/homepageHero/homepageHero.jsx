import React from 'react';
import '../../../styles/main.scss';
import './homepageHero.scss';

export class HomepageHero extends React.Component {

  render() {

        let headerImg 
        let athleteImg 

        this.props.data.forEach(element => {
        headerImg = element.acf.header_image
        athleteImg = element.acf.athlete_img
        });

        return (
            <React.Fragment>
                <div className="w-full h-screen relative overflow-hidden">
                    <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={headerImg}></img>
                    <div className="h-full w-full wrapper justify-center flex flex-col items-center">
                        <div className="absolute headerAthlete flex justify-center">
                            <div className="responsive-img aspect-ratio">
                                <img className={`lg:z-10 ${this.props.state.bgIsLoaded ? 'fade-in': null}`} alt="" src={athleteImg}></img>
                            </div>
                        </div>
                            <p className={`hero-text uppercase text-offWhite font-bold text-center ${this.props.state.bgIsLoaded ? 'fade-in-extended': ''}`}><span className="relative herotxt_a">elite</span> <span className="relative herotxt_b">fitness</span></p>
                            <p className={`hero-text uppercase text-primary font-bold text-center ${this.props.state.bgIsLoaded ? 'fade-in-extended': ''}`}><span className="relative herotxt_c">supreme</span> <span className="relative herotxt_d">strength</span></p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
