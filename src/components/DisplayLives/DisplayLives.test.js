import React from 'react';
import * as Enzyme from 'enzyme';
import DisplayLives from './DisplayLives.js';

describe('<DisplayLives />', () => {
  let wrapper;
  beforeEach(() => wrapper = Enzyme.shallow(<DisplayLives />));

  it('should render DisplayLives Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
});
