import { shallow } from 'enzyme';
import * as React from 'react';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const component = shallow(<App />);
    expect(component.find('.app')).not.toBeUndefined();
  });
  it('renders hello component', () => {
    const component = shallow(<App />);
    expect(component.find('Hello')).not.toBeUndefined();
  });
});
