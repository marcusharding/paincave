import React from 'react'

export class Footer extends React.Component {
    render() {
        return(
            <div className="footer bg-gray-900 w-full h-auto py-6">
                <div className="header-wrapper">
                    <div className="text-center w-full pb-6">
                        <a className='navbar-brand uppercase tracking-wider z-10 text-3xl' href="#hero" target="_blank">
                            <p className="text-offWhite font-bold">pain<span className="text-primary font-bold">cave</span></p>
                            <p className="text-white text-sm">Elite Fitness | Supreme Strength</p>
                        </a>
                    </div>
                    <div className="flex flex-row justify-between items-end">
                        <ul className="overflow">
                            <li className="md:ml-4 flex flex-col lg:flex-row">
                                <a className="g-nav__link text-thin text-white" data-scroll href="#about" target="_blank">
                                    About
                                </a>
                                <a className="g-nav__link text-thin text-white" data-scroll href="#shop" target="_blank">
                                    Shop
                                </a>
                                <a className="g-nav__link text-thin text-white" data-scroll href="#gym" target="_blank">
                                    Gym
                                </a>
                                <a className="g-nav__link text-thin text-white" data-scroll href="#athletes" target="_blank">
                                    Athletes
                                </a>
                            </li>
                        </ul>
                        <p className="text-white montserrat--regular">Site by <a href="https://www.marcusjh.co.uk"><span className="text-extra-bold uppercase montserrat--bold">MarcusJH</span></a></p>
                    </div>
                </div>
            </div>
        )
    }
}