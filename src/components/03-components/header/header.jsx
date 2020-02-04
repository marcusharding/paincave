import React from 'react';
import { Logo } from '../../01-objects/logo';
import { Nav } from '../../04-global/nav/nav';
import { Burger } from '../../01-objects/burger/burger';
import './header.scss';
import Headroom from 'react-headroom';

export class Header extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
      }
      
    componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
    }
    listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        this.setState({
          theposition: scrolled,
        })
      }

    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass(e) {
        e.preventDefault();
        const currentState = this.state.active;
        this.setState({ active: !currentState});
    }
    render() {
        if(this.state.theposition > 0.05){
            var headerScroll = true
        } else {
            headerScroll = false;
        }
        
        return ( 
            <Headroom 
            disableInlineStyles
            pinstart= '100px'
            >
                <header data-module='siteHeader' id="siteHeader" className={`header w-full z-50 ${headerScroll ? 'header-active': ''}`}>
                    <div className="header-wrapper flex justify-between">
                        {/* Include logo */}
                        <Logo
                        state={this.props.bgState}
                        />
                        {/* Include nav */}
                        <Nav
                        state = {this.state}
                        />
                        {/* */}
                        <Burger
                        toggleClass = {this.toggleClass}
                        state = {this.state}
                        bgState={this.props.bgState}
                        />
                    </div>
                </header>
            </Headroom>
        );
    }
}

