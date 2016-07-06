import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import RadioButton from './RadioButton';

class App extends React.Component {

  state = {
    name: '',
    gender: '',
    password: ''
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleGenderChange = (event) => {
    console.log(event.target);
  }

  render() {
    return (
      <div>
        <div className="col-md-8">
          <form>
            <h1>Register:</h1>
            <FormGroup label="Name">
              <Input
                type="text"
                className="form-control"
                placeholder="Name"
                onChange={this.handleNameChange}
              />
            </FormGroup>
            <FormGroup label="Password">
              <Input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handlePasswordChange}
              />
            </FormGroup>
            <FormGroup label="Gender">
              <RadioButton
                labels={['female', 'male', 'other']}
                name="gender"
                onChange={this.handleGenderChange}
              />
            </FormGroup>
          </form>
        </div>
        <div className="col-md-4">
          My name is {this.state.name}.
          My password is {this.state.password}.
        </div>
      </div>
    );
  }
}

export default App;
