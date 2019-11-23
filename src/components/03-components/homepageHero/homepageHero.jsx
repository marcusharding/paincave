import React from 'react';
import '../../08-helpers/responsive-img/_responsive-img.scss';

class HomepageHero extends React.Component {

    render() {
        return <div className="w-full h-screen relative">
                    <img alt="homepage header" className="absolute inset-0 object-cover w-full h-full opacity-15" src={require('../../../img/homepage_header.jpg')}></img>
                </div>

    }
}

export default HomepageHero;