import React from 'react';
import Title from 'src/Components/ChoreWheelList/ChoreWheel/Title';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('Title', () => {
  let onEditClick;
  let onSaveClick;

  beforeEach(() => {
    onEditClick = jest.fn();
    onSaveClick = jest.fn();
  });

  test('non-editable title snapshot', () => {
    const fixture = shallow(<Title
      choreWheel={{ title: { isEditable: false } }}
      {...{ onEditClick, onSaveClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('editable title snapshot', () => {
    const fixture = shallow(<Title
      choreWheel={{ title: { isEditable: true } }}
      {...{ onEditClick, onSaveClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('edit click called', () => {
    const fixture = shallow(<Title
      choreWheel={{ title: { isEditable: false } }}
      {...{ onEditClick, onSaveClick }}
    />);

    fixture.simulate('click');

    expect(onEditClick).toHaveBeenCalled();
    expect(onSaveClick).not.toHaveBeenCalled();
  });

  test('non-editable displays text in header', () => {
    const text = Utility.getRandomString();

    const fixture = shallow(<Title
      choreWheel={{ title: { isEditable: false, text } }}
      {...{ onEditClick, onSaveClick }}
    />);

    expect(fixture.text()).toEqual(text);
  });

  test('editable title props', () => {
    const id = Utility.getRandomNumber();
    const text = Utility.getRandomString();
    const choreWheel = { title: { isEditable: true, text },  id };

    const fixture = shallow(<Title
      {...{ choreWheel, onEditClick, onSaveClick }}
    />);

    const expected = {
      choreWheel,
      title: text,
      onSave: onSaveClick,
    };
    expect(fixture.props()).toEqual(expected);
  });
});
