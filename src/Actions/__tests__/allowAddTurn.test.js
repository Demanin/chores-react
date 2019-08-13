import Utility from 'jest/Utility';
import allowAddTurn from 'src/Actions/allowAddTurn';

describe('allowAddTurn', () => {
  test('action generated', () => {
    const id = Utility.getRandomNumber();

    const actual = allowAddTurn(id);

    expect(actual).toEqual({ type: 'ALLOW_ADD_TURN', id });
  });
});
