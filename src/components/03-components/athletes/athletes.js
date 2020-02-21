import React from 'react'
import { Slider } from '../../04-global/slider/slider'
import AthleteImg from '../../../assets/img/athlete.jpg'
import './athletes.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const slideData = [
    {
      index: 0,
      src: AthleteImg
    },
    {
      index: 1,
      src: AthleteImg
    },
    {
      index: 2,
      src: AthleteImg
    },
    {
      index: 3,
      src: AthleteImg
    }
  ]


export class Athletes extends React.Component {

    render() {
        return(
            <React.Fragment>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="wrapper flex items-center">
                <h1 className="text-offWhite uppercase font-bold text-3xl lg:text-5xl pb-12 lg:pb-0">Meet Our Athletes</h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="flex justify-center h-full justify-center overflow-x-hidden ml-auto slider__container py-12">
                <Slider
                  slides={slideData}
                  heading="Athlete Slider"
                />
              </div>
            </ScrollAnimation>
            </React.Fragment>
        )
    }
}