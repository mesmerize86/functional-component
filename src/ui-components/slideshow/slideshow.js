import React from 'react';
import Parser from 'html-react-parser';
import { defaultPath, imageNotFound } from '../../shared-components/images/image-source';

const slideshow = ({ title, description, imgSrc }) => {
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-thumbnail">
          <img onError={imageError} src={`${defaultPath}${imgSrc}`} alt={title} className="img-responsive"/>
          </div>
        <div className="slider-content">
          <p className="slider-title">{title}</p>
          <p className="slider-description" >{Parser(description)}</p>
        </div>
      </div>
    </div>
  )
}

const imageError = (e) =>{
  (e)=>{e.target.src= `${imageNotFound.imagePath} ${imageNotFound.imageName}` }

}

export default slideshow;
