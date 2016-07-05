import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import RadioButton from './RadioButton';

const App = () =>
  <div>
    <div className="col-md-8">
      <form>
        <h1>Register:</h1>
        <FormGroup label="Name">
          <Input
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </FormGroup>
        <FormGroup label="Password">
          <Input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup label="Gender">
          <RadioButton
            labels={['female', 'male', 'other']}
            name="gender"
          />
        </FormGroup>
      </form>
    </div>
    <div className="col-md-4">TODO</div>
  </div>;

export default App;
