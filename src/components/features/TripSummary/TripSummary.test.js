import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct url', () => {
    const component = shallow(<TripSummary id='abc' tags={[]} />);
    expect(component.find('Link').prop('to')).toBe('/trip/abc');
  });

});
