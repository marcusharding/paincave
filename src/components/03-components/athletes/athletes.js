import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import Athlete from '../../../assets/img/athlete.jpg'

export class Athletes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="wrapper py-24">
                    <h1 className="text-offWhite uppercase font-bold text-5xl">meet our athletes</h1>
                </div>
                <div class="">
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={3}
                        visibleSlides={3}
                        infinite={true}
                        currentSlide={0}
                    >
                        <ButtonBack className="text-white">Back</ButtonBack>
                        <ButtonNext className="text-white">Next</ButtonNext>
                        <Slider>
                            <Slide index={0}>
                                <div className="relative">
                                    <img className="absolute inset-0 object-cover" alt="" src={Athlete}></img>
                                </div>
                            </Slide>
                            <Slide index={1}>
                                <div className="relative">
                                    <img className="absolute inset-0 object-cover" alt="" src={Athlete}></img>
                                </div>
                            </Slide>
                            <Slide index={2} className="text-white">
                                <div className="relative">
                                    <img className="absolute inset-0 object-cover" alt="" src={Athlete}></img>
                                </div>
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            </React.Fragment>
        )
    }
}