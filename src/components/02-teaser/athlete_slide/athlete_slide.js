import React from 'react'
import './athlete_slide.scss'

// =========================
// Slide
// =========================

export class AthleteSlide extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)
        this.imageLoaded = this.imageLoaded.bind(this)
        this.athleteBtnOnClick = this.athleteBtnOnClick.bind(this)
        this.slide = React.createRef()

        this.state = {athleteInfo: false}
      }
      

      athleteBtnOnClick() {
        this.setState({athleteInfo: !this.state.athleteInfo})
      }

      handleMouseMove(event) {
        const el = this.slide.current
        const r = el.getBoundingClientRect()
    
        el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
        el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
      }
      
      handleMouseLeave(event) {    
        this.slide.current.style.setProperty('--x', 0)
        this.slide.current.style.setProperty('--y', 0)
      }
      
      handleSlideClick(event) {
        this.props.handleSlideClick(this.props.slide.index)
      }
      
      imageLoaded(event) {
        event.target.style.opacity = 1
      }
      
      render() {
        const { src, button, headline, index } = this.props.slide
        const current = this.props.current
        let classNames = 'slide'
        
        if (current === index) classNames += ' slide--current z-20'
        else if (current - 1 === index) classNames += ' slide--previous'
        else if (current + 1 === index) classNames += ' slide--next'
            
        return (
          <React.Fragment>
            {/* athlete information slide out */}
            <div className='athlete-info__wrappper'>
              <div className={`athlete-info__content p-4 ${this.state.athleteInfo === true ? 'active' : ''}`}>
                <p className="text-white text-3xl pb-2">{this.props.slide.name}</p>
                <p className="text-white text-2xl pb-2">{this.props.slide.title}</p>
                <p className="text-white text-lg">{this.props.slide.bio}</p>
              </div>  
            </div>
            <li 
              ref={this.slide}
              className={classNames} 
              onClick={this.handleSlideClick}
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
            >
              <div className="slide__image-wrapper">
                <img 
                  className="slide__image"
                  alt="athlete"
                  src={src}
                  onLoad={this.imageLoaded}
                />
                <button onClick={this.athleteBtnOnClick} className="athleteModalBtn" aria-label="Athlete info button">
                  <span className="athleteModalBtn__cross--a"></span>
                  <span className={`athleteModalBtn__cross--b ${this.state.athleteInfo === true ? 'opacity-0' : ''}`}></span>
                </button>
              </div>
            </li>
          </React.Fragment>
        )
      }
}