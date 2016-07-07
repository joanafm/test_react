import React from 'react';

const Alert = (props) =>
  <div className={props.type} role="alert">
    <a href="#" className="alert-link">{props.label}</a>
  </div>;

Alert.propTypes = {
  label: React.PropTypes.string,
  type: React.PropTypes.string
};

export default Alert;
