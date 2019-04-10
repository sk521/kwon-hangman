import React, { Component } from 'react';
import WrongLettersComponent from './components/WrongLetterComponent/WrongLettersComponent.js';
import Keyboard from './components/Keyboard/Keyboard.js';
import DisplayLives from './components/DisplayLives/DisplayLives.js';
import Button from './components/Button/Button.js';
import ChooseDifficulty from './components/ChooseDifficulty/ChooseDifficulty.js';
import { translateDifficultyToNumber, getARandomIdx } from './helper.js'
import './App.css';

const DEFAULT_LIVES = 6;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secretWord: '',
      guessedLetters: [],
      lives: DEFAULT_LIVES,
      isGameOver: false,
      difficulty: null,
    };
    this.makeGuess = this.makeGuess.bind(this);
    this.getGameWord = this.getGameWord.bind(this);
    this.renderKeyboardOrReplay = this.renderKeyboardOrReplay.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  // Function check if game has been won
  isGameWon(newLetters) {
    const gameWord = this.state.secretWord;
    const guessedLetters = newLetters;

    for (let i = 0; i < gameWord.length; i++) {
      if (!guessedLetters.includes(gameWord[i])) {
        console.log('caused the false: ', guessedLetters, gameWord[i]);
        return false;
      }
    }
    return true;
  }

  // Function changes the state of guessedLetter, lives, and isGameOver
  makeGuess(letter) {
    const newLetters = this.state.guessedLetters.concat(letter);
    const newAmountOfLives = DEFAULT_LIVES - this.getWrongLetters(newLetters).length;

    this.setState({
      guessedLetters: newLetters,
      lives: DEFAULT_LIVES - this.getWrongLetters(newLetters).length,
      isGameOver: newAmountOfLives === 0 || this.isGameWon(newLetters),
    });
  }

  // Gets secret word from provided API
  getGameWord(difficulty) {
    // Proxy URL to bypass CORS (Cross-Origin Resource Sharing) issue
    const proxyURL = 'http://warm-harbor-20254.herokuapp.com/';
    const difficultyLevel = translateDifficultyToNumber(difficulty);

    try {
      fetch(proxyURL + `http://app.linkedin-reach.io/words?difficulty=${difficultyLevel}&minLength=5&maxLength=10`)
        .then((res) => {
          // the response is a text not a json
          return res.text();
        })
        .then((words) => {
          const wordsList = JSON.stringify(words).split('\\n');
          let randomWord = getARandomIdx(wordsList);
          this.setState({
            secretWord: randomWord
          });
        });
    }
    catch (error) {
      console.log(error);
    }
  }

  // Changes state to default settings
  startNewGame() {
    this.setState({
      secretWord: '',
      difficulty: null,
      guessedLetters: [],
      lives: DEFAULT_LIVES,
      isGameOver: false,
    });
  }

  // Function checks if game is over, otherwise display '_' or correct letter
  renderWord() {
    let displayWord = '';

    if (this.state.isGameOver) {
      return this.state.secretWord;
    }

    for (let i = 0; i < this.state.secretWord.length; i++) {
      const currentLetter = this.state.secretWord[i];
      if (this.state.guessedLetters.indexOf(currentLetter) !== -1) {
        displayWord += currentLetter;
      } else {
        displayWord += ' _ ';
      }
    }

    return displayWord;
  }

  // Function filters the wrong letters
  getWrongLetters(letters) {
    const result = letters.filter(letter => {
      return this.state.secretWord.indexOf(letter) === -1;
    });
    return result;
  }

  setDifficulty(difficulty) {
    this.setState({
      difficulty
    });
    this.getGameWord(difficulty);
  }

  // function will render a ChooseDifficulty, Replay button, or Keyboard component
  //  Difficulty is set based on user's choice
  renderKeyboardOrReplay() {
    // if difficulty state is null, render difficulty component
    if (!this.state.difficulty) {
      return <ChooseDifficulty onClickCb={this.setDifficulty}/>
    }

    // if isGameOver state is true, render replay button
    if (this.state.isGameOver) {
      return <Button buttonCss={['button-letter']} className='replay-btn' buttonText='Replay' onClickCb={this.startNewGame} />
    }

    // otherwise render keyboard
    return <Keyboard makeGuess={this.makeGuess} />
  }

  render() {
    console.log('this.state.secretWord: ', this.state.secretWord);

    const { guessedLetters } = this.state;

    return (

      <div className='App'>
        <header className='App-header'>
          <div className='Container'>
            <div className='Game-row'>
              <div className='Render-word-screen'>
                {
                  this.renderWord()
                }
              </div>

              <div className='Render-wrong-word-screen'>
                <WrongLettersComponent
                  wrongLetters={this.getWrongLetters(guessedLetters)}
                />
              </div>
            </div>

            <DisplayLives
              lives={this.state.lives}
            />

            {
              this.renderKeyboardOrReplay()
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;

