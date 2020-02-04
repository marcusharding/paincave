import React from 'react';
import '../../../styles/main.scss';
import './homepageHero.scss';

export class HomepageHero extends React.Component {

  render() {

        var headerImg 
        var athleteImg

        this.props.data.forEach(element => {
        headerImg = element.acf.header_image
        athleteImg = element.acf.athlete_img
        });

        return (
            <React.Fragment>
                <div className="w-full h-screen relative">
                    <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={headerImg}></img>
                    <div className="h-full w-full wrapper justify-center flex flex-col items-center">
                        <div className="absolute headerAthlete flex justify-center">
                            <div className="w-full h-full relative aspect-ratio">
                                <img className={`absolute inset-0 object-cover w-full h-full lg:z-10 ${this.props.state.bgIsLoaded ? 'fade-in': null}`} alt="" src={athleteImg}></img>
                            </div>
                        </div>
                        <div className="">
                            <p className={`uppercase text-offWhite text-3xl lg:text-9xl font-bold text-center ${this.props.state.bgIsLoaded ? 'fade-in-extended': ''}`}><span className="relative herotxt_a">elite</span> <span className="relative herotxt_b">fitness</span></p>
                            <p className={`uppercase text-primary text-3xl lg:text-9xl font-bold text-center ${this.props.state.bgIsLoaded ? 'fade-in-extended': ''}`}><span className="relative herotxt_c">supreme</span> <span className="relative herotxt_d">strength</span></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
