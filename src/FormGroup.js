import React from 'react';

const FormGroup = ({ label, children }) =>
  <div className="form-group">
    <label>{label}</label>
    {children}
  </div>;

FormGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default FormGroup;
