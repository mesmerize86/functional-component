import React from 'react';
import { withState, withPropsOnChange, withHandlers, compose, lifecycle } from 'recompose';
import { requestApiAction } from './dropdown-action';
import { connect } from 'react-redux';

//child component
import SlideShow from '../slideshow/slideshow';

const dropdown = ({isExpand, title, handleClick, contents }) => {
  if(title){
    return (
      <div className="dropdown">
        <div className="dropdown-bar dropdown-bar-rounded--top">
          <p className="dropdown-title">
            <span className="icon-file"></span> {title}
            <a href="#" onClick={handleClick}>
              <span className={isExpand ? "icon-caret-down" : "icon-caret-up"}></span>
            </a>
          </p>
        </div>
        <div className="dropdown-content">
          {isExpand ? <SlideShow contents={contents} length={contents.length}/> : null }
        </div>
      </div>
    )
  };

  return null;
};

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
  withState('isExpand', 'setExpand', true),
  withPropsOnChange(['contents'], ({ contents }) => {
    return {
      title: contents.title,
      contents: contents.content,
    }
  }),
  withHandlers({
    handleClick: props => events => props.setExpand(!props.isExpand)
  })
)

export default enhance(dropdown);
