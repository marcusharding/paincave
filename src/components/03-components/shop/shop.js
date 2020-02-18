import React from 'react'
import { Fragment } from 'react'
import './shop.scss'
import mainImg from '../../../assets/img/clothing-hero.jpg'
import leftImg from '../../../assets/img/mainclothes.jpg'
import bottomRightImg from '../../../assets/img/back.jpg'
import topRightImg from '../../../assets/img/shorts.jpg'

export class Shop extends React.Component {
    render() {
        return (
            <Fragment>
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
            </Fragment>
        )
    }
}