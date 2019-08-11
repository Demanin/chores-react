import Utility from 'jest/Utility';
import VisibilityFilter from 'src/Reducers/VisibilityFilter';

describe('VisibilityFilter', () => {
  test('default state', () => {
    const actual = VisibilityFilter(undefined, {});

    expect(actual).toEqual('SHOW_VISIBLE');
  });

  test('set visibility filter on default state', () => {
    const type = 'SET_VISIBILITY_FILTER';
    const filter = Utility.getRandomString();

    const actual = VisibilityFilter(undefined, { type, filter });

    expect(actual).toEqual(filter)
  });

  test('set visibility ', () => {
    const type = 'SET_VISIBILITY_FILTER';
    const filterA = Utility.getRandomString();
    const filterB = Utility.getRandomString();

    const actual = VisibilityFilter(
      filterA,
      { type, filter: filterB }
    );

    expect(actual).toEqual(filterB);
  });

  test('undefined event', () => {
    const type = Utility.getRandomString();
    const filter = Utility.getRandomString();

    const actual = VisibilityFilter(undefined, { type, filter });

    expect(actual).toEqual('SHOW_VISIBLE');
  });
});
