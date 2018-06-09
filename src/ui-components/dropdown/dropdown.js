import React from 'react';
import { withState, withPropsOnChange, withHandlers, compose, lifecycle } from 'recompose';
import { requestApiAction } from './dropdown-action';
import { connect } from 'react-redux';

//child component
import SlideShow from '../slideshow/slideshow';

const dropdown = ({open, title, description, handleClick, contents }) => {
  if(title){
    return (
      <div className="dropdown">
        <div className="dropdown-bar dropdown-bar-rounded--top">
          <p className="dropdown-title">
            <span className="icon-file"></span> {title}
            <a href="#" onClick={handleClick}>
              <span className="icon-caret-down"></span>
            </a>
          </p>
      </div>
      <div className="dropdown-content">
      { /* content place holder for child component */}
      { slideshow(contents) }
      </div>
      </div>
    )
  };

  return null;
};

const slideshow = (contents) => {
  return(
    contents.map((content, index) => {
      return <SlideShow key={index} title={content.title} description={content.description} imgSrc={content.thumbnail} />
    })
  )
}

const mapStateToProps = (state) => {
  return {
    contents : state.contents
  }
}


const enhance = compose(
  connect(mapStateToProps, {requestApiAction}),
  lifecycle({
    componentDidMount(){
      this.props.requestApiAction();
    }
  }),
  withState('open', 'setOpen', true),
  withPropsOnChange(['contents'], ({contents}) => {
    return {
      title: contents.title,
      contents: contents.content
    }
  }),
  withHandlers({
    handleClick: props => events => props.setOpen(!props.open)
  })
)

export default enhance(dropdown);
