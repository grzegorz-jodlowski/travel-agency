import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';

const select = {
  icon: 'Icon',
  contactDescription: 'div.contact span',
};

const mockProps = {
  morningContactPerson: 'Adam',
  morningNumber: '111.222.333',
  afternoonContactPerson: 'Eva',
  afternoonNumber: '444.555.666',
  eveningContactPerson: 'John',
  eveningNumber: '777.888.999',
  nightDescription: 'Open at 8:00 UTC',
};

describe('Contact component', () => {
  it('should render without crashing', () => {
    const component = shallow(<Contact />);
    expect(component).toBeTruthy();
  });

  it('should render icon and contact description', () => {
    const component = shallow(<Contact />);
    expect(component.find(select.icon).exists()).toBe(true);
    expect(component.find(select.contactDescription).exists()).toBe(true);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct description at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<Contact {...mockProps} />);
    const renderedContactDescription = component.find(select.contactDescription).text();
    expect(renderedContactDescription).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component Contact with mocked Date', () => {
  checkDescriptionAtTime('22:00:00', mockProps.nightDescription);
  checkDescriptionAtTime('00:00:00', mockProps.nightDescription);
  checkDescriptionAtTime('07:59:59', mockProps.nightDescription);
  checkDescriptionAtTime('08:00:00', `${mockProps.morningContactPerson} ${mockProps.morningNumber}`);
  checkDescriptionAtTime('10:00:00', `${mockProps.morningContactPerson} ${mockProps.morningNumber}`);
  checkDescriptionAtTime('11:59:59', `${mockProps.morningContactPerson} ${mockProps.morningNumber}`);
  checkDescriptionAtTime('12:00:00', `${mockProps.afternoonContactPerson} ${mockProps.afternoonNumber}`);
  checkDescriptionAtTime('14:00:00', `${mockProps.afternoonContactPerson} ${mockProps.afternoonNumber}`);
  checkDescriptionAtTime('15:59:59', `${mockProps.afternoonContactPerson} ${mockProps.afternoonNumber}`);
  checkDescriptionAtTime('16:00:00', `${mockProps.eveningContactPerson} ${mockProps.eveningNumber}`);
  checkDescriptionAtTime('19:00:00', `${mockProps.eveningContactPerson} ${mockProps.eveningNumber}`);
  checkDescriptionAtTime('21:59:59', `${mockProps.eveningContactPerson} ${mockProps.eveningNumber}`);
});
