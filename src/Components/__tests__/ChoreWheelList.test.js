import ChoreWheelList from 'src/Components/ChoreWheelList';
import React from 'react';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('ChoreWheelList', () => {
  let onShowClick;
  let onHideClick;
  let onRemoveWheelClick;
  let refreshWheels;

  beforeEach(() => {
    onShowClick = jest.fn();
    onHideClick = jest.fn();
    onRemoveWheelClick = jest.fn();
    refreshWheels = jest.fn();
  });

  test('empty wheel list snapshot', () => {
    const fixture = shallow(<ChoreWheelList
      choreWheelList={[]}
      refresh={false}
      {...{ onShowClick, onHideClick, onRemoveWheelClick, refreshWheels }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('chore wheel props', () => {
    const choreWheelA = { id: Utility.getRandomNumber() };
    const choreWheelB = { id: Utility.getRandomNumber() };

    const fixture = shallow(<ChoreWheelList
      choreWheelList={[choreWheelA, choreWheelB]}
      refresh={false}
      {...{ onShowClick, onHideClick, onRemoveWheelClick, refreshWheels }}
    />);

    const expected = {
      onShowClick,
      onHideClick,
      onRemoveWheelClick,
    };
    const choreWheelList = fixture.find('ChoreWheel');
    expect(choreWheelList.at(0).props()).toEqual({ choreWheel: choreWheelA, ...expected });
    expect(choreWheelList.at(0).key()).toEqual('0');
    expect(choreWheelList.at(1).props()).toEqual({ choreWheel: choreWheelB, ...expected });
    expect(choreWheelList.at(1).key()).toEqual('1');
  });

  test('refresh prints refresh text', () => {
    const fixture = shallow(<ChoreWheelList
      choreWheelList={[{ id: Utility.getRandomNumber() }]}
      refresh={true}
      {...{ onShowClick, onHideClick, onRemoveWheelClick, refreshWheels }}
    />);

    expect(fixture.contains(<div>Refreshing...</div>)).toBeTruthy();
  });

  test('no refresh hides refresh text', () => {
    const fixture = shallow(<ChoreWheelList
      choreWheelList={[{ id: Utility.getRandomNumber() }]}
      refresh={false}
      {...{ onShowClick, onHideClick, onRemoveWheelClick, refreshWheels }}
    />);

    expect(fixture.contains(<div>Refreshing...</div>)).toBeFalsy();
  });

  test('setting refresh causes refreshWheels to be called', () => {
    const fixture = shallow(<ChoreWheelList
      choreWheelList={[{ id: Utility.getRandomNumber() }]}
      refresh={false}
      {...{ onShowClick, onHideClick, onRemoveWheelClick, refreshWheels }}
    />);

    fixture.setProps({ refresh: true });

    expect(refreshWheels).toHaveBeenCalled();
  });

  test('unsetting refresh does not cause refreshWheels to be called', () => {
    const fixture = shallow(<ChoreWheelList
      choreWheelList={[{ id: Utility.getRandomNumber() }]}
      refresh={true}
      {...{ onShowClick, onHideClick, onRemoveWheelClick, refreshWheels }}
    />);

    fixture.setProps({ refresh: false });

    expect(refreshWheels).not.toHaveBeenCalled();
  });
});
