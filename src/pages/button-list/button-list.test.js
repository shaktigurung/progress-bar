import React from 'react';
import { shallow } from 'enzyme';
import ButtonList from './button-list.component.jsx';
import ButtonNumber from './../../components/button-number/button-number.component';


describe('ButtonList', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<ButtonList />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(0);
  });

  it('should render the ButtonNumber Component', () => {
    expect(wrapper.containsMatchingElement(<ButtonNumber />)).toEqual(false);
  });
});