import AddTurn from 'src/Components/ChoreWheelList/ChoreWheel/AddTurn';
import React from 'react';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('AddTurn', () => {
  let onSaveClick;
  let onEditClick;

  beforeEach(() => {
    onSaveClick = jest.fn();
    onEditClick = jest.fn();
  })

  test('add turn not allowed', () => {
    const fixture = shallow(<AddTurn
      choreWheel={{}}
      userList={[]}
      {...{ onEditClick, onSaveClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('edit click called', () => {
    const fixture = shallow(<AddTurn
      choreWheel={{}}
      userList={[]}
      {...{ onEditClick, onSaveClick }}
    />);

    fixture.simulate('click');

    expect(onEditClick).toHaveBeenCalledTimes(1);
  });

  test('empty user list', () => {
    const fixture = shallow(<AddTurn
      choreWheel={{ allowAddTurn: true }}
      userList={[]}
      {...{ onEditClick, onSaveClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('FormGroup controlId', () => {
    const id = Utility.getRandomNumber();

    const fixture = shallow(<AddTurn
      choreWheel={{ allowAddTurn: true }}
      userList={[]}
      {...{ onEditClick, onSaveClick, id }}
    />);

    expect(fixture.find('FormGroup').prop('controlId')).toEqual('turn-adder-' + id);
  });

  test('onSaveClick called with event target value', () => {
    const value = Utility.getRandomString();

    const fixture = shallow(<AddTurn
      choreWheel={{ allowAddTurn: true }}
      userList={[]}
      {...{ onEditClick, onSaveClick }}
    />);

    fixture.find('FormControl').simulate('change', { target: { value }});

    expect(onSaveClick).toHaveBeenCalledWith(value);
  });

  test('user list added as options', () => {
    const idA = Utility.getRandomNumber();
    const idB = Utility.getRandomNumber();
    const nameA = Utility.getRandomString();
    const nameB = Utility.getRandomString();

    const fixture = shallow(<AddTurn
      choreWheel={{ allowAddTurn: true }}
      userList={[{ id: idA, name: nameA}, { id: idB, name: nameB }]}
      {...{ onEditClick, onSaveClick }}
    />);

    const select = fixture.find('FormControl');

    expect(select.childAt(0).props()).toEqual({ children: 'Select a user', value: '-1' });
    expect(select.childAt(0).key()).toEqual('-1');
    expect(select.childAt(1).props()).toEqual({ children: nameA, value: idA });
    expect(select.childAt(1).key()).toEqual('0');
    expect(select.childAt(2).props()).toEqual({ children: nameB, value: idB });
    expect(select.childAt(2).key()).toEqual('1');
  });
});
