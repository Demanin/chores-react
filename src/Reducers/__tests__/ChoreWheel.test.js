import ChoreWheel from 'src/Reducers/ChoreWheel';
import Utility from 'jest/Utility';

describe('ChoreWheel', () => {
  test('default state', () => {
    const actual = ChoreWheel(undefined, {});

    expect(actual).toEqual({});
  });

  test('hide chore wheel from default state', () => {
    const type = 'HIDE_CHORE_WHEEL';

    const actual = ChoreWheel(undefined, { type });

    expect(actual).toEqual({ isVisible: false });
  });

  test('hide chore wheel from existing state', () => {
    const type = 'HIDE_CHORE_WHEEL';
    const key = Utility.getRandomNumber();
    const value = Utility.getRandomString();

    const actual = ChoreWheel({ [key]: value }, { type });

    expect(actual).toEqual({ [key]: value, isVisible: false });
  });

  test('show chore wheel from default state', () => {
    const type = 'SHOW_CHORE_WHEEL';

    const actual = ChoreWheel(undefined, { type });

    expect(actual).toEqual({ isVisible: true });
  });

  test('show chore wheel from existing state', () => {
    const type = 'SHOW_CHORE_WHEEL';
    const key = Utility.getRandomNumber();
    const value = Utility.getRandomString();

    const actual = ChoreWheel({ [key]: value }, { type });

    expect(actual).toEqual({ [key]: value, isVisible: true });
  });

  test('allow add turn from default state', () => {
    const type = 'ALLOW_ADD_TURN';

    const actual = ChoreWheel(undefined, { type });

    expect(actual).toEqual({ allowAddTurn: true });
  });

  test('allow add turn from existing state', () => {
    const type = 'ALLOW_ADD_TURN';
    const key = Utility.getRandomNumber();
    const value = Utility.getRandomString();

    const actual = ChoreWheel({ [key]: value }, { type });

    expect(actual).toEqual({ [key]: value, allowAddTurn: true });
  });

  test('stop add turn from default state', () => {
    const type = 'STOP_ADD_TURN';

    const actual = ChoreWheel(undefined, { type });

    expect(actual).toEqual({ allowAddTurn: false });
  });

  test('stop add turn from existing state', () => {
    const type = 'STOP_ADD_TURN';
    const key = Utility.getRandomNumber();
    const value = Utility.getRandomString();

    const actual = ChoreWheel({ [key]: value }, { type });

    expect(actual).toEqual({ [key]: value, allowAddTurn: false });
  });
});
