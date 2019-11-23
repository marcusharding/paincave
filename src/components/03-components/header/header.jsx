import React from 'react';
import Logo from '../../01-objects/logo';
import Nav from '../../04-global/nav/nav';
import Burger from '../../01-objects/burger/burger';
import './header.scss';

class Header extends React.Component {
    render() {
        return ( 
            <header data-module="siteHeader" id="siteHeader" className="fixed w-full z-10 py-4">
                <div className="header-wrapper flex justify-between">
		            {/* Include logo */}
		            <Logo />
		            {/* Include nav */}
		            <Nav />
		            {/* */}
                    <Burger />
	            </div>
            </header>
        );
    }
}

export default Header;