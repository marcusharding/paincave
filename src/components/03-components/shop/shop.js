import React from 'react'
import { Fragment } from 'react'
import './shop.scss'
import mainImg from '../../../assets/img/clothing-hero.jpg'
import leftImg from '../../../assets/img/mainclothes.jpg'
import bottomRightImg from '../../../assets/img/back.jpg'
import topRightImg from '../../../assets/img/shorts.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

export class Shop extends React.Component {
    render() {

        return (
            <Fragment>
            <ScrollAnimation 
            animateIn="fadeIn"
            animateOnce={true}
            >
                <div className="wrapper">
                    <h1 className="text-offWhite uppercase font-bold text-4xl lg:text-5xl pb-6">Our Brand</h1>
                    <p className="text-white lg:text-xl lg:w-3/4 pb-12 lg:pb-12">A brand that reflects our values and beliefs. Designed to provide unmatched comfort whilst standing up to the most rigorous use.</p>
                </div>
                <div className="shop-grid__container wrapper">
                    <div className="shop-grid__mainImg relative">
                        <img alt="" className="absolute inset-0 w-full h-full" src={mainImg}></img>
                    </div>
                    <div className="shop-grid__leftImg relative">
                        <img alt="" className="absolute inset-0 w-full h-full" src={leftImg}></img>
                    </div>
                    <div className="shop-grid__bottomRightImg relative">
                        <img alt="" className="" src={bottomRightImg}></img>
                    </div>
                    <div className="shop-grid__topRightImg relative">
                        <img alt="" className="" src={topRightImg}></img>
                    </div>
                </div>
                </ScrollAnimation>
            </Fragment>
        )
    }
}