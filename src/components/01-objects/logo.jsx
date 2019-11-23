import React from 'react';

class logo extends React.Component {
    render() {
        return (
            <a className="navbar-brand uppercase text-white text-xl lg:text-4xl font-bold tracking-wider z-10" href="/">
	            <p className="text-offWhite">pain<span className="text-primary">cave</span></p>
            </a>
        );
    }
}

export default logo;