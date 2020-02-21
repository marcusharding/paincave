import React from 'react'
import { Logo } from '../01-objects/logo'

export class Footer extends React.Component {
    render() {
        return(
            <div className="footer bg-offBlack w-full h-auto py-6">
                <div className="header-wrapper">
                    <div className="text-center w-full pb-6">
                        <a className='navbar-brand uppercase tracking-wider z-10 text-3xl' href="#hero">
                            <p className="text-offWhite font-bold">pain<span className="text-primary font-bold">cave</span></p>
                            <p className="text-white text-xl">Elite Fitness | Supreme Strength</p>
                        </a>
                    </div>
                    <div className="flex flex-row justify-between items-baseline">
                        <ul className="overflow">
                            <li className="md:ml-4 lg:flex-auto">
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
                        <p class="text-white montserrat--regular">Site by <a href="https://www.marcusjh.co.uk"><span class="text-extra-bold uppercase montserrat--extraBold">MarcusJH</span></a></p>
                    </div>
                </div>
            </div>
        )
    }
}