import React from 'react';
import Button from './Button';

class Dropdown extends React.Component {

  static propTypes = {
    labels: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    message: React.PropTypes.string,
    selected: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  state = {
    choosen: '',
    country: 'Portugal'
  }

  handleCountryChange = (event) => {
    this.setState({ country: event.target.value });
  }

  /* toggleVisible() {
    this.setState({ isVisible: !this.state.isVisible });
  }*/

  renderListItems() {
    const items = [];
    for (let i = 0; i < this.props.labels.length; i++) {
      const item = this.props.labels[i];
      items.push(
        <div ref={item} onClick={this.props.onChange} value={item} key={i}>{item}</div>
      );
    }

    return items;
  }

  render() {
    return (
      <div className="dropdown">
        <Button
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          styles="dropdown-toggle"
        >
          {this.state.country}
          <span className="caret"></span>
        </Button>
        <ul id="ddown" className="dropdown-menu" aria-labelledby="dropdownMenu1">
          {this.renderListItems()}
        </ul>
      </div>
    );
  }
}

export default Dropdown;
