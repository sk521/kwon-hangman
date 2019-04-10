import React, { Component } from 'react';
import './DisplayLives.css';

class DisplayLives extends Component {

  renderLives() {
    let currentLives = this.props.lives;
    if (currentLives === 0) {
      return 'GAME OVER';
    }
    return 'Remaining Lives: ' + currentLives;
  }

  render() {
    return (
      <div className='display-lives'>
        {this.renderLives()}
      </div>
    )
  }
}


export default DisplayLives;
