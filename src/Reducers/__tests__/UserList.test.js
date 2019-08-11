import UserList from 'src/Reducers/UserList';
import Utility from 'jest/Utility';

describe('UserList', () => {
  test('default state', () => {
    const actual = UserList(undefined, {});

    expect(actual).toEqual({});
  });

  test('add user to default state', () => {
    const type = 'ADD_USER';
    const id = Utility.getRandomNumber();
    const name = Utility.getRandomString();

    const actual = UserList(undefined, { type, id, name });

    expect(actual).toEqual({ [id]: { id, name } });
  });

  test('add user to existing user list', () => {
    const type = 'ADD_USER';
    const idA = Utility.getRandomNumber();
    const idB = Utility.getRandomNumber();
    const nameA = Utility.getRandomString();
    const nameB = Utility.getRandomString();

    const actual = UserList(
      { [idA]: { id: idA, name: nameA } },
      { type, id: idB, name: nameB }
    );

    const expected = {
      [idA]: { id: idA, name: nameA },
      [idB]: { id: idB, name: nameB },
    };
    expect(actual).toEqual(expected);
  });

  test('undefined event', () => {
    const type = Utility.getRandomString();
    const id = Utility.getRandomNumber();
    const name = Utility.getRandomString();

    const actual = UserList(undefined, { type, id, name });

    expect(actual).toEqual({ });
  });
});
