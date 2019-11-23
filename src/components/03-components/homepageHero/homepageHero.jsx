import React from 'react';
import '../../08-helpers/responsive-img/_responsive-img.scss';

class HomepageHero extends React.Component {

    render() {
        return <div className="w-full h-screen relative">
                    <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={require('../../../img/homepage_header.jpg')}></img>
                    <div className="h-full w-full wrapper justify-center flex flex-col items-center">
                        <div className="">
                            <img alt="" src="" />
                        </div>
                        <p className="uppercase text-offWhite text-6xl">lorem ipsum</p>
                        <p className="uppercase text-primary text-6xl">sit dolor</p>
                    </div>
                </div>

    }
}

export default HomepageHero;