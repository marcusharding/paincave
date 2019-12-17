import React from 'react';

class logo extends React.Component {
    render() {
        return (
            <a className={`navbar-brand uppercase font-bold tracking-wider z-10 ${this.props.state ? 'fade-in-extended': ''}`} data-scroll href="#hero">
	            <p className="text-offWhite">pain<span className="text-primary">cave</span></p>
            </a>
        );
    }
}

export default logo;