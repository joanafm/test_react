import React from 'react';

const RadioButton = (props) => (
  <div className="radio">
    <label className="radio-inline">
      {props.labels.map((label, index) => {
        return (
          <div key={index}>
            <input
              type="radio"
              name="optradio"
            /> {label}
          </div>
        );
      })}
    </label>
  </div>
);

RadioButton.propTypes = {
  labels: React.PropTypes.array.isRequired
};

export default RadioButton;
