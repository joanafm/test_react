import React from 'react';
import Glyphicon from './Glyphicon';

const FormGroup = ({ label, children }) =>
  <div className="form-group">
    <label>
      <Glyphicon style="asterisk" />
      {label}
    </label>
    {children}
  </div>;

FormGroup.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export default FormGroup;
