import React from 'react';
import '../../08-helpers/responsive-img/_responsive-img.scss';
import './homepageHero.scss';

class HomepageHero extends React.Component {

    render() {
        return <div className="w-full h-screen relative">
                    <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={require('../../../img/homepage_header.jpg')}></img>
                    <div className="h-full w-full wrapper justify-center flex flex-col items-center">
                        <div class="absolute headerAthlete flex justify-center">
                            <div className="w-full h-full relative aspect-ratio">
                                <img className="absolute inset-0 object-cover w-full h-full" alt="" src={require('../../../img/header_athlete.png')} />
                            </div>
                        </div>
                        <p className="uppercase text-offWhite text-3xl lg:text-6xl"><span className="lg:mx-24">lorem</span> <span className="lg:mx-24">ipsum</span></p>
                        <p className="uppercase text-primary text-3xl lg:text-6xl"><span className="lg:mx-24">sit</span> <span className="lg:mx-24">dolor</span></p>
                    </div>
                </div>

    }
}

export default HomepageHero;