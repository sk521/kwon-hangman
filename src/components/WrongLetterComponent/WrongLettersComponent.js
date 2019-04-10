import React, { Component } from 'react';

class WrongLettersComponent extends Component {

  render() {
    return (
      <div className="wrong-guess-wrap">
        <p>Wrong Guesses:</p>
        <p className="wrong-letters">{this.props.wrongLetters}</p>
      </div>
    )
  }
}

export default WrongLettersComponent;
