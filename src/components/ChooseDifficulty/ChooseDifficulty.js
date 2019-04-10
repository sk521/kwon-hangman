import React, { Component } from 'react';
import Button from '../Button/Button.js';
import './ChooseDifficulty.css';

class ChooseDifficulty extends Component {
  render() {
    return (
      <div className='difficulty-btn-row'>
        <Button
          buttonCss={['easy-button']}
          buttonText='Easy'
          onClickCb={() => {
            this.props.onClickCb('easy')
          }}
        />
        <Button
          buttonCss={['med-button']}
          buttonText='Medium'
          onClickCb={() => {
            this.props.onClickCb('med')
          }}
        />
        <Button
          buttonCss={['hard-button']}
          buttonText='Hard'
          onClickCb={() => {
            this.props.onClickCb('hard')
          }}
        />
      </div>
    )
  }
}


export default ChooseDifficulty;
