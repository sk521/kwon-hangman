import React from 'react';
import * as Enzyme from 'enzyme';
import Keyboard from './Keyboard.js';

describe('<Keyboard />', () => {
  let wrapper;
  beforeEach(() => wrapper = Enzyme.shallow(<Keyboard />));

  it('should render Keyboard Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });
});
