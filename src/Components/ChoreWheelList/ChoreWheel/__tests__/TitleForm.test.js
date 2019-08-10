import React from 'react';
import TitleForm from 'src/Components/ChoreWheelList/ChoreWheel/TitleForm';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('TitleForm', () => {
  let onSave;

  beforeEach(() => {
    onSave = jest.fn();
  });

  test('empty form snapshot', () => {
    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ onSave }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('FormGroup controlId', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<TitleForm
      choreWheel={{ id }}
      {...{ onSave }}
    />);

    expect(fixture.prop('controlId')).toEqual('title-editor-' + id);
  });

  test('FormControl value starts with title', () => {
    const title = Utility.getRandomString();

    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ title, onSave }}
    />);

    expect(fixture.find('FormControl').prop('value')).toEqual(title);
  });

  test('blur immediately calls onSave with original title', () => {
    const title = Utility.getRandomString();

    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ title, onSave }}
    />);

    fixture.find('FormControl').simulate('blur');

    expect(onSave).toHaveBeenCalledWith(title);
  });

  test('pressing enter immediately calls onSave with original title', () => {
    const title = Utility.getRandomString();

    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ title, onSave }}
    />);

    fixture.find('FormControl').simulate('keydown', { keyCode: 13 });

    expect(onSave).toHaveBeenCalledWith(title);
  });

  test('non-enter key does not save', () => {
    const keyCode = Utility.getRandomNumber(14, 100);
    const title = Utility.getRandomString();

    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ title, onSave }}
    />);

    fixture.find('FormControl').simulate('keydown', { keyCode });

    expect(onSave).not.toHaveBeenCalled();
  });

  test('blurring after changing title saves new title', () => {
    const title = Utility.getRandomString();

    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ title: Utility.getRandomString(), onSave }}
    />);

    fixture.find('FormControl').simulate('change', { target: { value: title } });
    fixture.find('FormControl').simulate('blur');

    expect(onSave).toHaveBeenCalledWith(title);
  });

  test('pressing enter after changing title saves new title', () => {
    const title = Utility.getRandomString();

    const fixture = shallow(<TitleForm
      choreWheel={{}}
      {...{ title: Utility.getRandomString(), onSave }}
    />);

    fixture.find('FormControl').simulate('change', { target: { value: title } });
    fixture.find('FormControl').simulate('keydown', { keyCode: 13 });

    expect(onSave).toHaveBeenCalledWith(title);
  });
});
