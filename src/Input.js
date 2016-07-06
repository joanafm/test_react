import React from 'react';

const Input = (props) =>
  <input
    type={props.type}
    className="form-control"
    placeholder={props.placeholder}
    onChange={props.onChange}
  />;

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default Input;
