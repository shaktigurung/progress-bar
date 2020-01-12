import React from 'react';
import { shallow } from 'enzyme';
import DropDownList from './drop-down.component.jsx';

describe('DropDownList', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<DropDownList />));

  it('should render a <form />', () => {
    expect(wrapper.find('form').length).toEqual(0);
  });
});