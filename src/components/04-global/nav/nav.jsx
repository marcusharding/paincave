import React from 'react';
import './nav.scss';

class Nav extends React.Component {
    render() {
        return ( 
            <nav id="siteNav" className={`g-nav mobile-menu overflow-hidden ${this.props.state.active ? 'nav-is-active': ''}`}>
	            <ul className="g-nav__list justify-center align-center overflow py-20 lg:py-0">
			        <li className="md:ml-4 lg:flex-auto pb-12 lg:pb-0">
				        <a className="g-nav__link text-thin text-white" data-scroll href="#about">
					         About
				        </a>
				        <a className="g-nav__link text-thin text-white" data-scroll href="#shop">
					         Shop
				        </a>
				        <a className="g-nav__link text-thin text-white" data-scroll href="#gym">
					         Gym
				        </a>
				        <a className="g-nav__link text-thin text-white" data-scroll href="#athletes">
					         Athletes
				        </a>
			        </li>
	            </ul>
            </nav>
        );
    }
}

export default Nav;