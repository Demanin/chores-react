import Button from 'src/Components/Footer/Button';
import React from 'react';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('Button', () => {
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });

  test('empty button snapshot', () => {
    const fixture = shallow(<Button {...{ onClick }}></Button>);

    expect(fixture).toMatchSnapshot();
  });

  test('button is disabled if active', () => {
    const active = Utility.getRandomBool();

    const fixture = shallow(<Button {...{ onClick, active }}></Button>);

    expect(fixture.prop('disabled')).toEqual(active);
  });

  test('click calls onClick', () => {
    const fixture = shallow(<Button {...{ onClick }}></Button>);

    fixture.simulate('click');

    expect(onClick).toHaveBeenCalled();
  });

  test('children applied as fixture text', () => {
    const children = Utility.getRandomString();

    const fixture = shallow(<Button {...{ onClick }}>{children}</Button>);

    expect(fixture.text()).toEqual(children);
  });
});
