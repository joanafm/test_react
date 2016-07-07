import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import RadioButton from './RadioButton';
import DropDown from './DropDown';

class App extends React.Component {

  state = {
    name: '',
    gender: '',
    password: '',
    country: ''
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  handleGenderChange = (event) => {
    this.setState({ gender: event.target.value });
  }

  handleCountryChange = (event) => {
    this.setState({ country: event.target.value });
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
            <FormGroup label="Country">
              <DropDown
                labels={['Portugal', 'England', 'France', 'Germany', 'Spain', 'Other']}
                name="country"
                onChange={this.handleCountryChange}
              />
            </FormGroup>
          </form>
        </div>
        <div className="col-md-4">
          My name is {this.state.name}.
          My gender is {this.state.gender}.
          I am from {this.state.country}.
        </div>
      </div>
    );
  }
}

export default App;
