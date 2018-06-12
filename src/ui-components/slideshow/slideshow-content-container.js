import React from 'react';
import Parser from 'html-react-parser';
import classnames from 'classnames';
import { defaultPath, imageNotFound } from '../../shared-components/images/image-source';

const slideshowContentContainer = ({slide, title, description, imgSrc }) => {
  return (
    <div className={classnames("slider-container", {"isActive" : slide } )}>
      <div className="slider-thumbnail"><img  src={handleImageError(imgSrc)} alt={title} className="img-responsive"/></div>
      <div className="slider-content">
        <p className="slider-title">{title}</p>
        <p className="slider-description" >{Parser(description)}</p>
      </div>
    </div>
  )
}

const handleImageError = (imgSrc) => {
  return (typeof imgSrc === 'undefined' || imgSrc === null || imgSrc == '') ? 
    `${imageNotFound.imagePath}${imageNotFound.imageName}` : `${defaultPath}${imgSrc}` 
}

export default slideshowContentContainer
