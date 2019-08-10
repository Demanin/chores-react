import React from 'react';
import TurnList from 'src/Components/ChoreWheelList/ChoreWheel/TurnList';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('TurnList', () => {
  let onCompleteClick;
  let onSkipClick;
  let onRemoveClick;

  beforeEach(() => {
    onCompleteClick = jest.fn();
    onSkipClick = jest.fn();
    onRemoveClick = jest.fn();
  });

  test('empty wheel snapshot', () => {
    const fixture = shallow(<TurnList
      turnList={[]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('single turn snapshot', () => {
    const turn = 'Random User Name';

    const fixture = shallow(<TurnList
      turnList={[turn]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    expect(fixture).toMatchSnapshot();
  });

  test('single turn title', () => {
    const turn = Utility.getRandomString();

    const fixture = shallow(<TurnList
      turnList={[turn]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    expect(fixture.find('h4').text()).toEqual(turn);
  });

  test('single turn complete click', () => {
    const turn = Utility.getRandomString();

    const fixture = shallow(<TurnList
      turnList={[turn]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    fixture.find('ButtonGroup').childAt(0).simulate('click');

    expect(onCompleteClick).toHaveBeenCalled();
    expect(onSkipClick).not.toHaveBeenCalled();
    expect(onRemoveClick).not.toHaveBeenCalled();
  });

  test('single turn skip click', () => {
    const turn = Utility.getRandomString();

    const fixture = shallow(<TurnList
      turnList={[turn]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    fixture.find('ButtonGroup').childAt(1).simulate('click');

    expect(onCompleteClick).not.toHaveBeenCalled();
    expect(onSkipClick).toHaveBeenCalled();
    expect(onRemoveClick).not.toHaveBeenCalled();
  });

  test('single turn remove click', () => {
    const turn = Utility.getRandomString();

    const fixture = shallow(<TurnList
      turnList={[turn]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    fixture.find('ButtonGroup').childAt(2).simulate('click');

    expect(onCompleteClick).not.toHaveBeenCalled();
    expect(onSkipClick).not.toHaveBeenCalled();
    expect(onRemoveClick).toHaveBeenCalled();
  });

  test('two turns renders second turn below', () => {
    const turnA = Utility.getRandomString();
    const turnB = Utility.getRandomString();

    const fixture = shallow(<TurnList
      turnList={[turnA, turnB]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    const expected = `<div class="text-info well-sm">${turnB}</div>`;
    expect(fixture.childAt(1).html()).toEqual(expected);
  });

  test('third and fourth turns render as tertiary turns', () => {
    const turnA = Utility.getRandomString();
    const turnB = Utility.getRandomString();
    const turnC = Utility.getRandomString();
    const turnD = Utility.getRandomString();

    const fixture = shallow(<TurnList
      turnList={[turnA, turnB, turnC, turnD]}
      {...{ onCompleteClick, onSkipClick, onRemoveClick }}
    />);

    const expectedC = `<div class="well-sm" style="color:#aaa">${turnC}</div>`;
    expect(fixture.childAt(2).html()).toEqual(expectedC);
    const expectedD = `<div class="well-sm" style="color:#aaa">${turnD}</div>`;
    expect(fixture.childAt(3).html()).toEqual(expectedD);
  });
});
