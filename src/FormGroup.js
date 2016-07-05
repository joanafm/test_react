import React from 'react';
import Input from './Input';

const FormGroup = (props) =>
  <div className="form-group">
    <label>{props.label}</label>
    <Input
      type={props.type}
      className="form-control"
      placeholder={props.placeholder}
    />
  </div>;

FormGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired
};

export default FormGroup;
