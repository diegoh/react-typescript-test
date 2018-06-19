import { mount, ReactWrapper } from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('Button', () => {
  let component: ReactWrapper<JSX.Element>;
  const mockFn: jest.Mock = jest.fn();
  const defaultText: string = 'My Button';

  beforeEach(() => {
    component = mount(<Button action={mockFn} text={defaultText} />);
  });

  it('is a native button', () => {
    expect(component.is('button')).toBeTruthy();
  });

  it('shows the right text', () => {
    expect(component.text()).toBe(defaultText);
  });

  it('calls the action function', () => {
    const comp = component;
    comp.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
