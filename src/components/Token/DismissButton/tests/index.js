import React from 'react';
import DismissButton from '../index';
import { shallow } from 'enzyme';

describe('components/Token/DismissButton', () => {
  it('should render `Button`', () => {
    const component = shallow(<DismissButton onClick={ function() {} } />);
    expect(component.find('Button').length).toBe(1);
  });

  it('should pass test section to `Button`', () => {
    const component = shallow(
      <DismissButton
        testSection="goose"
        onClick={ function() {} }
      />
    );
    expect(component.find('Button').props().testSection).toBe('goose-dismiss');
  });

  it('should pass `onClick` to `Button`', () => {
    const myFunc = function() {};
    const component = shallow(
      <DismissButton
        testSection="goose"
        onClick={ myFunc }
      />
    );
    expect(component.find('Button').props().onClick).toBe(myFunc);
  });
});
