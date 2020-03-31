import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  const expectedName = 'hello';
  const expectedType = 'icons';

  it('should render without crashing', () => {
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption name={expectedName} />);
    expect(component).toEqual({});
    console.log(component.debug());
  });

  it('should render correct title', () => {
    const component = shallow(<OrderOption name={expectedName} type={expectedType} />);
    expect(component.find('.title').text()).toBe(expectedName);
  });
});
