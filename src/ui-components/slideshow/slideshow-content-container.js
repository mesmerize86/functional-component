import React from 'react';
import Parser from 'html-react-parser';
import classnames from 'classnames';
import { handleImageError } from '../../shared-components/util/util';

const slideshowContentContainer = ({slide, title, description, thumbnail }) => {
  return (
    <div className={classnames("slider-container", {"isActive" : slide } )}>
      <div className="slider-thumbnail"><img  src={handleImageError(thumbnail)} alt={title} className="img-responsive"/></div>
      <div className="slider-content">
        <p className="slider-title">{title}</p>
        <p className="slider-description" >{Parser(description)}</p>
      </div>
    </div>
  )
}

export default slideshowContentContainer
