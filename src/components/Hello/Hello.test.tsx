import { shallow } from 'enzyme';
import * as React from 'react';

import Hello from './Hello';

describe('Hello', () => {
  it('renders successfully', () => {
    const component = shallow(<Hello name="Test" enthusiasmLevel={5} />);
    expect(component.find('.hello').length).toEqual(1);
  });

  it('shows the right greeting', () => {
    const component = shallow(<Hello name="ABCDEFG" enthusiasmLevel={5} />);
    expect(component.find('.greeting').text()).toEqual('Hello ABCDEFG!!!!!');
  });

  it('shows the 1 exclamation mark when no enthusiasm level is defined', () => {
    const component = shallow(<Hello name="ABCDEFG" />);
    expect(component.find('.greeting').text()).toEqual('Hello ABCDEFG!');
  });

  it('throws when enthusiasm is 0', () => {
    expect(() => {
      shallow(<Hello name="ABCDEFG" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it('throws when enthusiasm is negative', () => {
    expect(() => {
      shallow(<Hello name="ABCDEFG" enthusiasmLevel={-1} />);
    }).toThrow();
  });
});
