import React from 'react';
import './nav.scss';

class Nav extends React.Component {
    render() {
        return ( 
            <nav id="siteNav" className="g-nav mobile-menu overflow-hidden">
	            <ul className="g-nav__list justify-center align-center overflow py-20 lg:py-0">
			        <li className="md:ml-4 lg:flex-auto pb-12 lg:pb-0">
				        <a className="g-nav__link text-thin text-white" href="<?= $item->url;?>">
					         About
				        </a>
				        <a className="g-nav__link text-thin text-white" href="<?= $item->url;?>">
					         Shop
				        </a>
				        <a className="g-nav__link text-thin text-white" href="<?= $item->url;?>">
					         Gym
				        </a>
				        <a className="g-nav__link text-thin text-white" href="<?= $item->url;?>">
					         Athletes
				        </a>
			        </li>
	            </ul>
            </nav>
        );
    }
}

export default Nav;