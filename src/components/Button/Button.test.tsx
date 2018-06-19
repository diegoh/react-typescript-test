import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('Button', () => {
  let component: ShallowWrapper<JSX.Element>;
  const classNames: string = 'class-one class-two';
  const mockFn: jest.Mock = jest.fn();
  const defaultText: string = 'My Button';

  beforeEach(() => {
    component = shallow(<Button action={mockFn} text={defaultText} classNames={classNames} />);
  });

  it('is a native button', () => {
    expect(component.is('button')).toBeTruthy();
  });

  it('has the correct classes assigned', () => {
    expect(component.hasClass('class-one')).toBeTruthy();
    expect(component.hasClass('class-two')).toBeTruthy();
  });

  it('has the correct classes assigned', () => {
    const comp = shallow(<Button action={mockFn} text={defaultText} classNames="" />);
    expect(comp.hasClass('class-one')).toBeFalsy();
  });

  it('shows the right text', () => {
    expect(component.text()).toBe(defaultText);
  });

  it('calls the action function', () => {
    component.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
