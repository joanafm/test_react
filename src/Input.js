import React from 'react';

const Input = (props) =>
  <input
    type={props.type}
    className="form-control"
    placeholder={props.placeholder}
  />;

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired
};

export default Input;
