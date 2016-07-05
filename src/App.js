import React from 'react';
import FormGroup from './FormGroup';

const App = () =>
  <div>
    <div className="col-md-8">
      <h1>Register:</h1>
      <FormGroup label="Name" type="text" placeholder="Name" />
      <FormGroup label="Password" type="password" placeholder="Password" />
    </div>
    <div className="col-md-4">TODO</div>
  </div>;

export default App;
