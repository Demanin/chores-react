import ChoreWheel from 'src/Components/ChoreWheelList/ChoreWheel';
import React from 'react';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('ChoreWheel', () => {
  let onShowClick;
  let onHideClick;
  let onRemoveWheelClick;

  beforeEach(() => {
    onShowClick = jest.fn();
    onHideClick = jest.fn();
    onRemoveWheelClick = jest.fn();
  });

  test('empty wheel snapshot', () => {
    const fixture = shallow(<ChoreWheel
      choreWheel={{}}
      {...{ onShowClick, onHideClick, onRemoveWheelClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('WheelHeader has choreWheel as prop', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ChoreWheel
      choreWheel={{ id }}
      {...{ onShowClick, onHideClick, onRemoveWheelClick }}
    />);

    expect(fixture.find('Connect(Title)').prop('choreWheel')).toEqual({ id });
  });

  test('remove wheel click', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ChoreWheel
      choreWheel={{ id }}
      {...{ onShowClick, onHideClick, onRemoveWheelClick }}
    />);

    fixture.find('Button').simulate('click');

    expect(onRemoveWheelClick).toHaveBeenCalledWith(id);
  });

  test('VisibleTurnList has choreWheel as prop', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ChoreWheel
      choreWheel={{ id }}
      {...{ onShowClick, onHideClick, onRemoveWheelClick }}
    />);

    expect(fixture.find('Connect(TurnList)').prop('choreWheel')).toEqual({ id });
  });

  test('WheelTurnAdder has choreWheel as prop', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ChoreWheel
      choreWheel={{ id }}
      {...{ onShowClick, onHideClick, onRemoveWheelClick }}
    />);

    expect(fixture.find('Connect(AddTurn)').prop('choreWheel')).toEqual({ id });
  });

  test('ShowHideButton props', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ChoreWheel
      choreWheel={{ id }}
      {...{ onShowClick, onHideClick, onRemoveWheelClick }}
    />);

    const expected = {
      choreWheel: { id },
      onShowClick,
      onHideClick,
    };
    expect(fixture.find('ShowHideButton').props()).toEqual(expected);
  });
});
