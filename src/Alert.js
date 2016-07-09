import React from 'react';

const Alert = ({ style, label }) => {
  const addStyle = () => {
    const baseStyle = `alert alert-${style}`;
    return baseStyle;
  };
  return (
    <div className={addStyle()} role="alert">
      <a href="" className="alert-link">{label}</a>
    </div>
  );
};

Alert.propTypes = {
  label: React.PropTypes.string.isRequired,
  style: React.PropTypes.string.isRequired
};

export default Alert;
