import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDisabled: false,
    }
  }

  render() {
    return (
      <button
        className={`button ${ this.props.buttonCss.join(' ') } ${ this.state.isDisabled ? 'disabled' : '' }` }
        disabled={this.state.isDisabled}
        onClick={() => {
          this.setState({ isDisabled: !this.state.isDisabled })
          this.props.onClickCb(this.props.buttonText.toLowerCase())
        }}>
        {this.props.buttonText}
      </button>
    )
  }
}

export default Button;
