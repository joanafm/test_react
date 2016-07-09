import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import RadioButton from './RadioButton';
import DropDown from './DropDown';
import Button from './Button';
import Alert from './Alert';
import Glyphicon from './Glyphicon';
import { isValidPassword, isValidName, isValidGender } from './lib/validation';

class App extends React.Component {

  state = {
    country: 'Portugal',
    gender: '',
    name: '',
    password: '',
    validateName: false,
    validatePassword: false,
    validateGender: false
  }

  handleNameBlur = () => {
    this.setState({ validateName: true });
  }

  handlePasswordBlur = () => {
    this.setState({ validatePassword: true });
  }

  handleGenderBlur = () => {
    this.setState({ validateGender: true });
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

  handleSubmitData = () => {
    let valid = true;
    if (!isValidName(this.state.name)) {
      this.setState({ validateName: true });
      valid = false;
    }
    if (!isValidPassword(this.state.password)) {
      this.setState({ validatePassword: true });
      valid = false;
    }
    if (!isValidName(this.state.gender)) {
      this.setState({ validateGender: true });
      valid = false;
    }
    if (!valid) {
      console.log('The login form is not complete.');
    } else {
      console.log(
        `name: ${this.state.name}, gender: ${this.state.gender}, country: ${this.state.country}`
      );
    }
  }

  handleAlertName() {
    if (this.state.validateName && !isValidName(this.state.name)) {
      return (
        <Alert
          style="danger"
          label="Your need to write your name."
        />);
    }
    return null;
  }

  handleAlertPassword() {
    if (this.state.validatePassword && !isValidPassword(this.state.password)) {
      return (
        <Alert
          style="danger"
          label="Your password needs to have at least 6
            characters, and can only contain letters and numbers."
        />);
    }
    return null;
  }

  handleAlertGender() {
    if (this.state.validateGender && !isValidGender(this.state.gender)) {
      return (
        <Alert
          style="danger"
          label="Your need to choose your gender."
        />);
    }
    return null;
  }

  renderText() {
    const name = `My name is ${this.state.name}.`;
    let gender = '';
    let country = '';
    if (this.state.gender === 'Female') {
      gender = 'I am a girl.';
    } else if (this.state.gender === 'Male') {
      gender = 'I am a boy.';
    }
    if (this.state.country === 'Other') {
      country += 'My country is not in the list.';
    } else {
      country += `I am from ${this.state.country}.`;
    }
    return (
      <span>
        <div id="glyphicon">
          <Glyphicon
            style="user"
          /> <b>Your Information:</b>
        </div>
        <p>
          {name}
        </p>
        <p>
          {gender}
        </p>
        <p>
          {country}
        </p>
      </span>);
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
                onBlur={this.handleNameBlur}
              />
              {this.handleAlertName()}
            </FormGroup>
            <FormGroup label="Password">
              <Input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.handlePasswordChange}
                onBlur={this.handlePasswordBlur}
              />
              {this.handleAlertPassword()}
            </FormGroup>
            <FormGroup label="Gender">
              <RadioButton
                labels={['Female', 'Male', 'Other']}
                name="gender"
                onChange={this.handleGenderChange}
                onBlur={this.handleGenderBlur}
              />
              {this.handleAlertGender()}
            </FormGroup>
            <FormGroup label="Country">
              <DropDown
                labels={['Portugal', 'England', 'France', 'Germany', 'Spain', 'Other']}
                name="country"
                onChange={this.handleCountryChange}
              />
            </FormGroup>
            <div id="submitButton">
              <Button
                id="submit"
                aria-haspopup="true"
                aria-expanded="true"
                onClick={this.handleSubmitData}
              >Submit <Glyphicon style="ok" /></Button>
            </div>
          </form>
        </div>
        <div className="col-md-4">
          <div id="finalText">{this.renderText()}</div>
        </div>
      </div>
    );
  }
}

export default App;
