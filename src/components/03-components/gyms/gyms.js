import React from 'react'
import './gyms.scss'
import Img1 from '../../../assets/img/img1.jpg'
import Img2 from '../../../assets/img/img2.jpg'
import Img3 from '../../../assets/img/img3.jpg'
import Img4 from '../../../assets/img/img4.jpg'

export class Gyms extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <h1 className="text-offWhite uppercase font-bold text-4xl lg:text-5xl pb-6">our gyms</h1>
                <p className="text-white text-xl w-1/2 pb-24">Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.</p>
                <div className="flex flex-wrap">
                    <div className="w-1/2 lg:w-1/5 responsive-img aspect-ratio">
                        <img alt="" className="" src={Img1}></img>
                        <div className="gym__overlay--a">
                            <p className="text-white font-bold text-xl">London</p>
                            <p className="text-white italic ">England</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/5 responsive-img aspect-ratio">
                        <img alt="" className="" src={Img2}></img>
                        <div className="gym__overlay--b">
                            <p className="text-white font-bold text-xl">Tokyo</p>
                            <p className="text-white italic ">Japan</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/5 responsive-img aspect-ratio">
                        <img alt="" className="" src={Img3}></img>
                        <div className="gym__overlay--c">
                            <p className="text-white font-bold text-xl">Chicago</p>
                            <p className="text-white italic ">Illinois</p>
                        </div>
                    </div>
                    <div className="w-1/2 lg:w-1/5 responsive-img aspect-ratio">
                        <img alt="" className="" src={Img4}></img>
                        <div className="gym__overlay--d">
                            <p className="text-white font-bold text-xl">New York</p>
                            <p className="text-white italic ">Usa</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}