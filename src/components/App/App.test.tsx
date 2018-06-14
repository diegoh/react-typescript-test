import { shallow } from 'enzyme';
import 'jest-enzyme';
import * as React from 'react';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component).toExist();
  });

  it('renders hello component', () => {
    const component = shallow(<App />);
    expect(component).toExist();
  });
});
