import React from 'react'
import { AthleteSlide } from '../../02-teaser/athlete_slide/athlete_slide'
import '../../04-global/slider/slider.scss'

  // =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
    return (
      <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
        <svg className="icon" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
    )
  }


// =========================
// Slider
// =========================

export class Slider extends React.Component {
    constructor(props) {
      super(props)
      
      this.state = { current: 0 }
      this.handlePreviousClick = this.handlePreviousClick.bind(this)
      this.handleNextClick = this.handleNextClick.bind(this)
      this.handleSlideClick = this.handleSlideClick.bind(this)
    }
    
    handlePreviousClick() {
      const previous = this.state.current - 1
          
      this.setState({ 
        current: (previous < 0) 
          ? this.props.slides.length - 1
          : previous
      })
    }
    
    handleNextClick() {
      const next = this.state.current + 1;
      
      this.setState({ 
        current: (next === this.props.slides.length) 
          ? 0
          : next
      })
    }
    
    handleSlideClick(index) {
      if (this.state.current !== index) {
        this.setState({
          current: index
        })
      }
    }
  
    render() {
      const { current, direction } = this.state
      const { slides, heading } = this.props 
      const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
      const wrapperTransform = {
        'transform': `translateX(-${current * (100 / slides.length)}%)`
      }
      
      return (
        <React.Fragment>
            <div className="slider__controls">
                <SliderControl 
                type="previous"
                title="Go to previous slide"
                handleClick={this.handlePreviousClick}
                />
                
                <SliderControl 
                type="next"
                title="Go to next slide"
                handleClick={this.handleNextClick}
                />
            </div>

            <div className='slider mb-4' aria-labelledby={headingId}>
                <ul className="slider__wrapper" style={wrapperTransform}>
                    <h3 id={headingId} className="visuallyhidden">{heading}</h3>
                    {slides.map(slide => {
                    return (
                        <AthleteSlide
                        key={slide.index}
                        slide={slide}
                        current={current}
                        handleSlideClick={this.handleSlideClick}
                        />
                    )
                    })}
                </ul>
            </div>
            {slides.map(slide => {
              return (
                <div key={slide.index} className={`athlete-title__container ${slide.index === this.state.current ? 'block' : 'hidden'}`}>
                  <p className="text-white pb-2 text-3xl">{slide.name}</p>
                  <p className="text-white uppercase text-xl">{slide.title}</p>
                </div>
              )
            })}
        </React.Fragment>
      )
    }
  }