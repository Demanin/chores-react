import toggleRefresh from 'src/Actions/toggleRefresh';

describe('toggleRefresh', () => {
  test('action generated', () => {
    const actual = toggleRefresh();

    expect(actual).toEqual({ type: 'TOGGLE_REFRESH' });
  });
});
