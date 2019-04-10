import React, { Component } from 'react';
import Button from '../Button/Button.js';
import './Keyboard.css';

const firstRow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const secondRow = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class Keyboard extends Component {
  constructor(props) {
    super(props)

    this.makeRow = this.makeRow.bind(this);
    this.makeButton = this.makeButton.bind(this);
  }

  makeButton(letter) {
    return <Button buttonCss={['button-letter']} buttonText={letter} key={letter} onClickCb={this.props.makeGuess} />
  }

  makeRow(row) {
    return (
      <div className='button-row' key={row.join('')}>
        {
          row.map(this.makeButton)
        }
      </div>
    );
  }

  render() {
    return (
      <div className='Keyboard'>
        {
          [firstRow, secondRow].map(this.makeRow)
        }
      </div>
    );
  }
}

export default Keyboard;
