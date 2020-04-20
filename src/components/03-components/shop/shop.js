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

        // var img1
        // var img2
        // var img3
        // var img4

        // this.props.data.forEach(element => {
        //    const img1 = element.acf.shop_images.shop_image_1
        //    const img2 = element.acf.shop_images.shop_image_2
        //    const img3 = element.acf.shop_images.shop_image_3
        //    const img4 = element.acf.shop_images.shop_image_4
        //     });

        return (
            <Fragment>
            <ScrollAnimation 
            animateIn="fadeIn"
            animateOnce={true}
            >
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