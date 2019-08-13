import Utility from 'jest/Utility';
import setVisibilityFilter from 'src/Actions/setVisibilityFilter';

describe('setVisibilityFilter', () => {
  test('action generated', () => {
    const filter = Utility.getRandomString();

    const actual = setVisibilityFilter(filter);

    expect(actual).toEqual({ type: 'SET_VISIBILITY_FILTER', filter });
  });
});
