import ChoreWheel from 'src/Reducers/ChoreWheel';
import Utility from 'jest/Utility';

describe('ChoreWheel', () => {
  test('default state', () => {
    const actual = ChoreWheel(undefined, {});

    expect(actual).toEqual({});
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

  test('edit wheel title from default state', () => {
    const type = 'EDIT_WHEEL_TITLE';

    const actual = ChoreWheel(undefined, { type });

    expect(actual).toEqual({ title: { isEditable: true } });
  });

  test('edit wheel title from existing state', () => {
    const type = 'EDIT_WHEEL_TITLE';
    const text = Utility.getRandomString();

    const actual = ChoreWheel({ title: { text }}, { type });

    expect(actual).toEqual({ title: { text, isEditable: true } });
  });

  test('save wheel title from default state', () => {
    const type = 'SAVE_WHEEL_TITLE';
    const text = Utility.getRandomString();

    const actual = ChoreWheel(undefined, { type, title: text });

    expect(actual).toEqual({ title: { text, isEditable: false } });
  });

  test('save wheel title from existing state', () => {
    const type = 'SAVE_WHEEL_TITLE';
    const oldText = Utility.getRandomString();
    const newText = Utility.getRandomString();

    const actual = ChoreWheel({ title: { text: oldText }}, { type, title: newText });

    expect(actual).toEqual({ title: { text: newText, isEditable: false } });
  });
});
