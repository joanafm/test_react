import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import RadioButton from './RadioButton';
import DropDown from './DropDown';
import Button from './Button';

class App extends React.Component {

  state = {
    name: '',
    gender: '',
    password: '',
    country: 'Portugal',
    sex: ''
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

  submitData = () => {
    if (this.state.name === '') {
      console.log('The user did not set a name.');
    } if (this.state.password === '') {
      console.log('The user did not ser a password');
    } if (this.state.gender === '') {
      console.log('The user did not set a gender');
    } else {
      console.log(
        `name: ${this.state.name}, gender: ${this.state.gender}, country: ${this.state.country}`
      );
    }
  }

  renderText() {
    let text = `My name is ${this.state.name}.`;
    if (this.state.gender === 'Female') {
      text += 'I am a girl.';
    } else if (this.state.gender === 'Male') {
      text += 'I am a boy.';
    }
    text += `I am from ${this.state.country}.`;
    return text;
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
                labels={['Female', 'Male', 'Other']}
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
            <Button
              id="dropdownMenu1"
              aria-haspopup="true"
              aria-expanded="true"
              onClick={this.submitData}
            >Submit</Button>
          </form>
        </div>
        <div className="col-md-4">
          {this.renderText()}
        </div>
      </div>
    );
  }
}

export default App;
