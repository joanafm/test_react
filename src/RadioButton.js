import React from 'react';

const RadioButton = (props) => (
  <div className="radio">
    {props.labels.map((label, index) => {
      return (
        <label className="radio-inline" key={index}>
          <input
            value={label}
            type="radio"
            name={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
          /> {label}
        </label>
      );
    })}
  </div>
);

RadioButton.propTypes = {
  labels: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onBlur: React.PropTypes.func.isRequired
};

export default RadioButton;
