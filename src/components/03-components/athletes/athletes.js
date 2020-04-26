import React from 'react'
import { Slider } from '../../04-global/slider/slider'
import AthleteImg from '../../../assets/img/athlete.jpg'
import './athletes.scss'
import ScrollAnimation from 'react-animate-on-scroll'

const slideData = [
    {
      index: 0,
      src: AthleteImg,
      name: 'Marcus Harding',
      title: 'ceo',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      index: 1,
      src: AthleteImg,
      name: 'Chris Graham',
      title: 'chairman',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      index: 2,
      src: AthleteImg,
      name: 'Joe Bloggs',
      title: 'coach',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    },
    {
      index: 3,
      src: AthleteImg,
      name: 'Steve Allen',
      title: 'Board Director',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
              {/* <div className="slider__container"> */}
                <Slider
                  slides={slideData}
                  heading="Athlete Slider"
                />
              {/* </div> */}
            </ScrollAnimation>
            </React.Fragment>
        )
    }
}