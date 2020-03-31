import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct url', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.find('Link').prop('to')).toBe('/trip/abc');
    console.log(component.debug());
  });

  it('should render correct src and alt for img', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.find('img').prop('src')).toBe('image.png');
    expect(component.find('img').prop('alt')).toBe('Marvelous travel');
    console.log(component.debug());
  });

  it('should render correct name, cost and days props', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.find('.title').text()).toBe('Marvelous travel');
    expect(component.find('.days').text()).toBe('14 days');
    expect(component.find('.cost').text()).toBe('from $139');
    console.log(component.debug());
  });

  it('should throw an error without required props', () => {
    expect(() => <TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} />).toThrow();
    expect(() => <TripSummary id='abc' name='Marvelous travel' cost='$139' />).toThrow();
    expect(() => <TripSummary id='abc' name='Marvelous travel' />).toThrow();
    expect(() => <TripSummary id='abc' />).toThrow();
    expect(() => <TripSummary />).toThrow();
  });
});
