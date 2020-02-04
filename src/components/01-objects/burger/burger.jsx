import React from 'react';

export class Burger extends React.Component {
    render() {
        return (
            <a href="/" id="mobileMenu" data-menu-button aria-controls='site-nav' aria-expanded='false' className={`o-burger ml-4 block relative z-20 text-black cursor-pointer flex items-end lg:items-center ${this.props.state ? 'fade-in-extended': ''}`}>
                <span className="visuallyhidden">Open Menu</span>
                <button aria-label="Hamburger Menu" onClick={this.props.toggleClass} className={this.props.state.active ? 'hamburger hamburger--slider is-active': 'hamburger hamburger--slider'} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </a>
        );
    }
}


  