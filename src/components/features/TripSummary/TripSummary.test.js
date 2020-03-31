import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to correct url', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.find('Link').prop('to')).toBe('/trip/abc');
  });

  it('should render correct src and alt for img', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.find('img').prop('src')).toBe('image.png');
    expect(component.find('img').prop('alt')).toBe('Marvelous travel');
  });

  it('should render correct name, cost and days props', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.find('.title').text()).toBe('Marvelous travel');
    expect(component.find('.details > span').at(0).text()).toBe('14 days');
    expect(component.find('.details > span').at(1).text()).toBe('from $139');
  });

  it('should throw an error without required props', () => {
    expect(() => <TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} />).toThrow();
    expect(() => <TripSummary id='abc' name='Marvelous travel' cost='$139' />).toThrow();
    expect(() => <TripSummary id='abc' name='Marvelous travel' />).toThrow();
    expect(() => <TripSummary id='abc' />).toThrow();
    expect(() => <TripSummary />).toThrow();
  });

  it('should render correct array with tags', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={['tag1', 'tag2', 'tag3']} />);
    expect(component.find('.tag').at(0).text()).toBe('tag1');
    expect(component.find('.tag').at(1).text()).toBe('tag2');
    expect(component.find('.tag').at(2).text()).toBe('tag3');
  });

  it('shouldn\'t render <div> with class tags when tags array is empty', () => {
    const component = shallow(<TripSummary id='abc' name='Marvelous travel' cost='$139' days={14} image='image.png' tags={[]} />);
    expect(component.exists('.tags')).toBeFalsy();
  });
});
