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

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
//const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */

    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains divs with icon class', () => {
          const iconClassDivs = renderedSubcomponent.find('div.icon');
          expect(iconClassDivs.length).toBe(mockProps.values.length + 1);
          expect(iconClassDivs.at(0).prop('value')).toBe('');
          expect(iconClassDivs.at(1).find('Icon').prop('name')).toBe(mockProps.values[0].icon);
          expect(iconClassDivs.at(2).find('Icon').prop('name')).toBe(mockProps.values[1].icon);
        });

        it('should run setOptionValue function on change', () => {
          renderedSubcomponent.find('div.icon').at(2).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'checkboxes': {
        it('contains inputs with checkbox type', () => {
          const checkboxesInput = renderedSubcomponent.find(`input[type='checkbox']`);

          expect(checkboxesInput.length).toBe(mockProps.values.length);
          expect(checkboxesInput.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(checkboxesInput.at(1).prop('value')).toBe(mockProps.values[1].id);
          console.log(renderedSubcomponent.debug());
        });

        it('should run setOptionValue function on change', () => {
          renderedSubcomponent.find(`input[type='checkbox']`).at(1).simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
        });

        break;
      }
      case 'number': {
        break;
      }
      case 'text': {
        break;
      }
      case 'date': {
        break;
      }
    }
  });
}
