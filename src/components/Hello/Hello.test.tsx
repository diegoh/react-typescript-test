import { shallow } from 'enzyme';
import 'jest-enzyme';
import * as React from 'react';

import Hello from './Hello';

describe('Hello', () => {
  it('renders successfully', () => {
    const component = shallow(<Hello languageName="Test" enthusiasmLevel={5} />);
    expect(component).toExist();
  });

  it('has className .hello', () => {
    const component = shallow(<Hello languageName="Test" enthusiasmLevel={5} />);
    expect(component.find('.hello').length).toEqual(1);
  });

  it('shows the right greeting', () => {
    const component = shallow(<Hello languageName="ABCDEFG" enthusiasmLevel={5} />);
    expect(component.find('.greeting').text()).toEqual('Hello ABCDEFG!!!!!');
  });

  it('shows the 1 exclamation mark when no enthusiasm level is defined', () => {
    const component = shallow(<Hello languageName="ABCDEFG" />);
    expect(component.find('.greeting').text()).toEqual('Hello ABCDEFG!');
  });

  it('throws when enthusiasm is 0', () => {
    expect(() => {
      shallow(<Hello languageName="ABCDEFG" enthusiasmLevel={0} />);
    }).toThrow();
  });

  it('throws when enthusiasm is negative', () => {
    expect(() => {
      shallow(<Hello languageName="ABCDEFG" enthusiasmLevel={-1} />);
    }).toThrow();
  });

  it('decrement action is called', () => {
    const action: jest.Mock<() => void> = jest.fn();
    const component = shallow(
      <Hello languageName="Test" enthusiasmLevel={5} onDecrement={action} />,
    );
    component.find('.decrementButton').simulate('click');
    expect(action).toHaveBeenCalledTimes(1);
  });
});
