import React from 'react';
import { shallow } from 'enzyme';
import ButtonNumber from './button-number.component.jsx';

describe('ButtonNumber', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<ButtonNumber />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});