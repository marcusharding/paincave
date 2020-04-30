import React from 'react'
import Heart from '../../../assets/svg/heart.svg'
import KettleBell from '../../../assets/svg/kettlebell.svg'
import Strong from '../../../assets/svg/strong.svg'
import ScrollAnimation from 'react-animate-on-scroll'

const fakeArray = [
    {
        index: 0,
        img: Heart,
        txt: 'Exceptional conditioning is the foundation to each and every one of us'
    },
    {
        index: 1,
        img: KettleBell,
        txt: 'Fluid and functional movement ensures we stay safe and ready for anything'
    },
    {
        index: 2,
        img: Strong,
        txt: 'Unrivaled strength is the last component that seperates us from the rest'
    }
]

export class WhoAreWe extends React.Component {

    render() {

        let aboutHeading = ''
        let aboutSubHeading = ''

        this.props.data.forEach(element => {
            aboutHeading = element.acf.about_heading
            aboutSubHeading = element.acf.about_subhead
            });

        const widget = fakeArray.map((widget) =>
            <ScrollAnimation 
            key={widget.index}
            animateIn="fadeIn"
            delay={`${widget.index + 6}00`}
            animateOnce={true}
            >
                <div className="flex flex-col items-center pb-12 lg:pb-0">
                    <img alt="" className="w-1/3 lg:w-1/2 pb-6" src={widget.img}></img>
                    <p className="text-white lg:mb-0 text-center lg:w-3/4">{widget.txt}</p>
                </div> 
            </ScrollAnimation>
        )
     
        return(
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="wrapper">
                    <h1 className="text-offWhite uppercase font-bold text-4xl lg:text-5xl pb-6">{aboutHeading}</h1>
                    <p className="text-white lg:text-xl lg:w-3/4 pb-12 lg:pb-24">{aboutSubHeading}</p>
                    
                    <div className="flex flex-col lg:flex-row justify-between">
                        {widget}
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}
