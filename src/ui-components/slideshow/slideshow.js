import React from 'react';
import Parser from 'html-react-parser';
import classnames from 'classnames';
import { withState, withHandlers, compose } from 'recompose';

//partial components
import SlideshowContentContainer from './slideshow-content-container';

const slideshow = ({ contents, currentSlide, handlePrevButton, handleNextButton }) => {
  return (
    <div className="slider">
      { slideshowContainer(contents, currentSlide) }
      <div className="slider-control">
        <ul className="slider-control-wrapper">
          <li className="slider-control--left">
            <a href="#" onClick={handlePrevButton} className="slider-control-link">
              <span className="icon icon-caret-left"></span> <span className="control-text control-text--prev">Prev</span>
            </a>
          </li>
          <li className="slider-control--right">
            <a href="#" onClick={handleNextButton} className="slider-control-link">
              <span className="control-text control-text--next">Next</span> <span className="icon icon-caret-right"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

const slideshowContainer = (contents, currentSlide) => {
  return (
    contents.map((content, index) => {
      return <SlideshowContentContainer slide = { currentSlide === index } key = { index } title={ content.title } description={ content.description } thumbnail={ content.thumbnail } />
    })
  )
}

const enhanceSlideshow = compose (
  withState('currentSlide', 'setCurrentSlide', 0),
  withHandlers({
    handlePrevButton : ({ setCurrentSlide, length }) => e => {
      setCurrentSlide(currentSlide => currentSlide === 0 ? length - 1 : currentSlide - 1)
    },
    handleNextButton : ({ setCurrentSlide, length }) => e => {
      setCurrentSlide(currentSlide => currentSlide < length - 1 ? currentSlide + 1 : 0)
    }
  })
)
export default enhanceSlideshow(slideshow);
