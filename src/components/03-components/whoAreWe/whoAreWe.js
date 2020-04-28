import React from 'react'
import Heart from '../../../assets/svg/heart.svg'
import KettleBell from '../../../assets/svg/kettlebell.svg'
import Strong from '../../../assets/svg/strong.svg'
import ScrollAnimation from 'react-animate-on-scroll'

const fakeArray = [
    {
        index: 0,
        img: Heart
    },
    {
        index: 1,
        img: KettleBell
    },
    {
        index: 2,
        img: Strong
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
                <div className="flex flex-col items-center">
                    <img alt="" className="w-1/3" src={widget.img}></img>
                    <p className="text-white mb-6 lg:mb-0 lg:text-center pt-12 lg:w-3/4">Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur Lorem ipsum dolor sit amet.</p>
                </div> 
            </ScrollAnimation>
        )
     
        return(
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="wrapper">
                    <h1 className="text-offWhite uppercase font-bold text-4xl lg:text-5xl pb-6">{aboutHeading}</h1>
                    <p className="text-white text-xl lg:w-1/2 pb-24">{aboutSubHeading}</p>
                    
                    <div className="flex flex-col lg:flex-row justify-between">
                        {widget}
                    </div>
                </div>
            </ScrollAnimation>
        )
    }
}
