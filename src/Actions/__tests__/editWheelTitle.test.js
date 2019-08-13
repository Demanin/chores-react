import Utility from 'jest/Utility';
import editWheelTitle from 'src/Actions/editWheelTitle';

describe('editWheelTitle', () => {
  test('action generated', () => {
    const id = Utility.getRandomNumber();

    const actual = editWheelTitle(id);

    expect(actual).toEqual({ type: 'EDIT_WHEEL_TITLE', id });
  });
});
