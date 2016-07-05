import React from 'react';

const RadioButton = (props) => (
  <div className="radio">
    {props.labels.map((label, index) => {
      return (
        <label className="radio-inline" key={index}>
          <input
            type="radio"
            name={props.name}
          /> {label}
        </label>
      );
    })}
  </div>
);

RadioButton.propTypes = {
  labels: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired
};

export default RadioButton;
