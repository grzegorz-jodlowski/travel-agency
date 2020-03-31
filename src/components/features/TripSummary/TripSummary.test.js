import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct url', () => {
    const component = shallow(<TripSummary id='abc' tags={[]} />);
    expect(component.find('Link').prop('to')).toBe('/trip/abc');
    console.log(component.debug());
  });

  it('should render correct src and alt for img', () => {
    const component = shallow(<TripSummary image='image.png' name='description' tags={[]} />);
    expect(component.find('img').prop('src')).toBe('image.png');
    expect(component.find('img').prop('alt')).toBe('description');
    console.log(component.debug());
  });

  it('should render correct name, cost and days props', () => {
    const component = shallow(<TripSummary name='Marvelous travel' cost='$139' days={14} tags={[]} />);
    expect(component.find('.title').text()).toBe('Marvelous travel');
    expect(component.find('.days').text()).toBe('14 days');
    expect(component.find('.cost').text()).toBe('from $139');
    console.log(component.debug());
  });
});
