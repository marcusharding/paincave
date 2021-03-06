import React from 'react';

export class Logo extends React.Component {
    render() {
        return (
            <a className={`navbar-brand uppercase tracking-wider z-10 ${this.props.state ? 'fade-in-extended': ''}`} data-scroll href="#hero" target="_blank">
	            <p className="text-offWhite font-bold">pain<span className="text-primary font-bold">cave</span></p>
            </a>
        );
    }
}

