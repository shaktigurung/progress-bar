import React from 'react';
import { shallow } from 'enzyme';
import ProgressFiller from './progress-filler.component.jsx';

describe('ProgressFiller', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<ProgressFiller />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});