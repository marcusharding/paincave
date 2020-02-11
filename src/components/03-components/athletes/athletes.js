import React from 'react'
import { Slider } from '../../04-global/slider/slider'
import AthleteImg from '../../../assets/img/athlete.jpg'
import './athletes.scss'

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
            <div className="wrapper py-12 flex items-center">
                <h1 className="text-offWhite uppercase font-bold text-5xl">Meet Our Athletes</h1>
            </div>
            <div className="flex justify-center h-full justify-center overflow-x-hidden ml-auto slider__container">
                <Slider
                    slides={slideData}
                    heading="Athlete Slider"
                />
            </div>
            </React.Fragment>
        )
    }
}