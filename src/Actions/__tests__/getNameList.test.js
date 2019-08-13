import Utility from 'jest/Utility';
import getNameList from 'src/Actions/getNameList';

describe('getNameList', () => {
  test('empty turn list', () => {
    const turnList = [];
    const userList = {};

    const actual = getNameList({ turnList, currentTurn: 0 }, userList);

    expect(actual).toEqual([]);
  });

  test('single turn, single user', () => {
    const userId = Utility.getRandomNumber();
    const name = Utility.getRandomString();
    const turnList = [{ userId }];
    const userList = { [userId]: { name } };

    const actual = getNameList({ turnList, currentTurn: 0 }, userList)

    expect(actual).toEqual([name]);
  });

  test('single turn, no users', () => {
    const userId = Utility.getRandomNumber();
    const turnList = [{ userId }];
    const userList = {};

    const actual = getNameList({ turnList, currentTurn: 0 }, userList)

    expect(actual).toEqual(['--- Unknown User ---']);
  });

  test('two turns, single user', () => {
    const userId = Utility.getRandomNumber();
    const name = Utility.getRandomString();
    const turnList = [{ userId }, { userId }];
    const userList = { [userId]: { name } };

    const actual = getNameList({ turnList, currentTurn: 0 }, userList)

    expect(actual).toEqual([name, name]);
  });

  test('two turns, two user', () => {
    const userIdA = Utility.getRandomNumber();
    const userIdB = Utility.getRandomNumber();
    const nameA = Utility.getRandomString();
    const nameB = Utility.getRandomString();
    const turnList = [{ userId: userIdA }, { userId: userIdB }];
    const userList = { [userIdA]: { name: nameA }, [userIdB]: { name: nameB } };

    const actual = getNameList({ turnList, currentTurn: 0 }, userList)

    expect(actual).toEqual([nameA, nameB]);
  });

  test('two turns, two user, current turn second user', () => {
    const userIdA = Utility.getRandomNumber();
    const userIdB = Utility.getRandomNumber();
    const nameA = Utility.getRandomString();
    const nameB = Utility.getRandomString();
    const turnList = [{ userId: userIdA }, { userId: userIdB }];
    const userList = { [userIdA]: { name: nameA }, [userIdB]: { name: nameB } };

    const actual = getNameList({ turnList, currentTurn: 1 }, userList)

    expect(actual).toEqual([nameB, nameA]);
  });
});
