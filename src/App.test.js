import React from 'react';
import * as Enzyme from 'enzyme';
import App from './App';
import WrongLettersComponent from './components/WrongLetterComponent/WrongLettersComponent.js';
import DisplayLives from './components/DisplayLives/DisplayLives.js';
import ChooseDifficulty from './components/ChooseDifficulty/ChooseDifficulty.js';

// Returns whether or not any nodes exist in the wrapper

describe('<App />', () => {
  let wrapper;
  beforeEach(() => wrapper = Enzyme.shallow(<App />));

  it('renders App', () => {
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render WrongLetters Component', () => {
    expect(wrapper.containsMatchingElement(<WrongLettersComponent />)).toEqual(true);
  });

  it('should render ChooseDifficulty Component', () => {
    expect(wrapper.containsMatchingElement(<ChooseDifficulty />)).toEqual(true);
  });

  it('should render DisplayLives Component', () => {
    expect(wrapper.containsMatchingElement(<DisplayLives />)).toEqual(true);
  });
});
