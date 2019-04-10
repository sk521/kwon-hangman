import React from 'react';
import * as Enzyme from 'enzyme';
import WrongLettersComponent from './WrongLettersComponent.js';

describe('<WrongLettersComponent />', () => {
  let wrapper;
  beforeEach(() => wrapper = Enzyme.shallow(<WrongLettersComponent />));

  it('should render WrongLetter Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <p>', () => {
    expect(wrapper.find('p').length).toEqual(2);
  });
});

