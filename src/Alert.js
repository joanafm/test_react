import React from 'react';

const Alert = (props) =>
  <div className={props.type} role="alert">
    <a href="" className="alert-link">{props.label}</a>
  </div>;

Alert.propTypes = {
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired
};

export default Alert;
