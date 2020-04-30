import React from 'react'
import { Slider } from '../../04-global/slider/slider'
import AthleteImg from '../../../assets/img/athlete.jpg'
import AthleteImg2 from '../../../assets/img/women.jpg'
import AthleteImg3 from '../../../assets/img/maleathlete.jpg'
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
      src: AthleteImg2,
      name: 'Kelly Brookes',
      title: 'chairman',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      index: 2,
      src: AthleteImg3,
      name: 'Joe Bloggs',
      title: 'coach',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
    }
  ]


export class Athletes extends React.Component {

    render() {
        return(
            <React.Fragment>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div style={this.props.mobileModalActive === true ? this.props.modalActiveStyle : null} className="wrapper flex flex-col items-baseline items-center">
                <h1 className="text-offWhite uppercase font-bold text-3xl lg:text-5xl pb-6">Meet Our Athletes</h1>
                <p className="text-white lg:text-xl lg:w-3/4 pb-6 lg:pb-12">Each and every one of us wants the best for ourselves and fellow Athletes. We understand that the only way to be the best we can be is to show up and put in the work.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <Slider
                  slides={slideData}
                  heading="Athlete Slider"
                  mobileModalActive={this.props.mobileModalActive}
                  onMobileModalClick={this.props.onMobileModalClick}
                  desktopModalActive={this.props.desktopModalActive}
                  onDesktopModalClick={this.props.onDesktopModalClick}
                  modalActiveStyle={this.props.modalActiveStyle}
                />
            </ScrollAnimation>
            </React.Fragment>
        )
    }
}