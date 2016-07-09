import React from 'react';

const Glyphicon = ({ style }) => {
  const addStyle = () => {
    const baseStyle = `glyphicon glyphicon-${style}`;
    return baseStyle;
  };
  return (
    <span className={addStyle()} aria-hidden="true" />
  );
};

Glyphicon.propTypes = {
  style: React.PropTypes.string.isRequired,
};

export default Glyphicon;
