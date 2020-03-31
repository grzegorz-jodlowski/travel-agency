import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  const expectedValues = {
    id: 'abc',
    name: 'Marvelous travel',
    cost: '$139',
    days: 14,
    image: 'image.png',
    tagsEmptyArray: [],
    tagsArray: ['tag1', 'tag2', 'tag3'],
  };

  it('should generate link to correct url', () => {
    const component = shallow(<TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} days={expectedValues.days} image={expectedValues.image} tags={expectedValues.tagsEmptyArray} />);
    expect(component.find('Link').prop('to')).toBe(`/trip/${expectedValues.id}`);
  });

  it('should render correct src and alt for img', () => {
    const component = shallow(<TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} days={expectedValues.days} image={expectedValues.image} tags={expectedValues.tagsEmptyArray} />);
    expect(component.find('img').prop('src')).toBe(expectedValues.image);
    expect(component.find('img').prop('alt')).toBe(expectedValues.name);
  });

  it('should render correct name, cost and days props', () => {
    const component = shallow(<TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} days={expectedValues.days} image={expectedValues.image} tags={expectedValues.tagsEmptyArray} />);
    expect(component.find('.title').text()).toBe(expectedValues.name);
    expect(component.find('.details > span').at(0).text()).toBe(`${expectedValues.days} days`);
    expect(component.find('.details > span').at(1).text()).toBe(`from ${expectedValues.cost}`);
  });

  it('should throw an error without required props', () => {
    expect(() => <TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} days={expectedValues.days} />).toThrow();
    expect(() => <TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} />).toThrow();
    expect(() => <TripSummary id={expectedValues.id} name={expectedValues.name} />).toThrow();
    expect(() => <TripSummary id={expectedValues.id} />).toThrow();
    expect(() => <TripSummary />).toThrow();
  });

  it('should render correct array with tags', () => {
    const component = shallow(<TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} days={expectedValues.days} image={expectedValues.image} tags={expectedValues.tagsArray} />);
    expect(component.find('.tag').at(0).text()).toBe(expectedValues.tagsArray[0]);
    expect(component.find('.tag').at(1).text()).toBe(expectedValues.tagsArray[1]);
    expect(component.find('.tag').at(2).text()).toBe(expectedValues.tagsArray[2]);
  });

  it('shouldn\'t render <div> with class tags when tags array is empty', () => {
    const component = shallow(<TripSummary id={expectedValues.id} name={expectedValues.name} cost={expectedValues.cost} days={expectedValues.days} image={expectedValues.image} tags={expectedValues.tagsEmptyArray} />);
    expect(component.exists('.tags')).toBeFalsy();
  });
});
