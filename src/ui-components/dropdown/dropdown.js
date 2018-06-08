import React from 'react';
import { withState, withPropsOnChange, withHandlers, compose, lifecycle } from 'recompose';
import { requestApiAction } from './dropdown-action';
import { connect } from 'react-redux';

const dropdown = ({open, title, description, handleClick }) => {
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
          {open ? description : null}
        </div>
    </div>
  )
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
  withState('open', 'setOpen', true),
  withPropsOnChange(['contents'], ({contents}) => {
    console.log(contents);
  }),
  withHandlers({
    handleClick: props => events => props.setOpen(!props.open)
  })
)

export default enhance(dropdown);
