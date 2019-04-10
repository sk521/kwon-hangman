import React from 'react';
import * as Enzyme from 'enzyme';
import ChooseDifficulty from './ChooseDifficulty.js';

describe('<ChooseDifficulty />', () => {
  let wrapper;
  beforeEach(() => wrapper = Enzyme.shallow(<ChooseDifficulty />));

  it('should render ChooseDifficulty Component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a <Button />', () => {
    expect(wrapper.find('Button').length).toEqual(3);
  });
});


