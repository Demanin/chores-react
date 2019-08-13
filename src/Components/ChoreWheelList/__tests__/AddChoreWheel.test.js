import AddChoreWheel from 'src/Components/ChoreWheelList/AddChoreWheel';
import React from 'react';
import { shallow } from 'enzyme';

describe('AddChoreWheel', () => {
  let onClick;

  beforeEach(() => {
    onClick = jest.fn();
  });

  test('snapshot', () => {
    const fixture = shallow(<AddChoreWheel
      {...{ onClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('single turn complete click', () => {
    const fixture = shallow(<AddChoreWheel
      {...{ onClick }}
    />);

    fixture.find('Button').simulate('click');

    expect(onClick).toHaveBeenCalled();
  });
});
