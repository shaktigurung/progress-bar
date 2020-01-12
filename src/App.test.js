import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import HomePage from './pages/homepage/homepage.component';

describe('App', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the HomePage Component', () => {
    expect(wrapper.containsMatchingElement(<HomePage />)).toEqual(true);
  });
});