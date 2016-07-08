import React from 'react';

const Glyphicon = (props) =>
  <span className={props.className} aria-hidden="true" />;

Glyphicon.propTypes = {
  className: React.PropTypes.string.isRequired,
};

export default Glyphicon;
