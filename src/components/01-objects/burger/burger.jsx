import React from 'react';

class Burger extends React.Component {
    render() {
        return (
            <a href="/" onClick={toggleBurger} id="mobileMenu" data-menu-button aria-controls='site-nav' aria-expanded='false' className="o-burger ml-4 block relative z-20 text-black cursor-pointer lg:hidden">
                <span className="visuallyhidden">Open Menu</span>
                <button className="hamburger hamburger--slider" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </a>
        );
    }
}

export default Burger; 

function toggleBurger(e) {
    e.preventDefault();
    console.log('clicked')
}
  