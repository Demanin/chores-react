import React from 'react';
import ShowHideButton from 'src/Components/ChoreWheelList/ChoreWheel/ShowHideButton';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('ShowHideButton', () => {
  let onShowClick;
  let onHideClick;

  beforeEach(() => {
    onShowClick = jest.fn();
    onHideClick = jest.fn();
  });

  test('hidden snapshot', () => {
    const fixture = shallow(<ShowHideButton
      choreWheel={{ isVisible: false }}
      {...{ onShowClick, onHideClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('visible snapshot', () => {
    const fixture = shallow(<ShowHideButton
      choreWheel={{ isVisible: true }}
      {...{ onShowClick, onHideClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('show click called', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ShowHideButton
      choreWheel={{ isVisible: false, id}}
      {...{ onShowClick, onHideClick }}
    />);

    fixture.simulate('click');

    expect(onShowClick).toHaveBeenCalledWith(id);
    expect(onHideClick).not.toHaveBeenCalled();
  });

  test('hide click called', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<ShowHideButton
      choreWheel={{ isVisible: true, id}}
      {...{ onShowClick, onHideClick }}
    />);

    fixture.simulate('click');

    expect(onHideClick).toHaveBeenCalledWith(id);
    expect(onShowClick).not.toHaveBeenCalled();
  });
});
