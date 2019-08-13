import Utility from 'jest/Utility';
import getVisibleChoreWheels from 'src/Actions/getVisibleChoreWheels';

describe('getVisibleChoreWheels', () => {
  test('empty wheel list', () => {
    const byId = {};
    const filter = Utility.getRandomString();

    const actual = getVisibleChoreWheels({ byId }, filter);

    expect(actual).toEqual([]);
  });

  const allWheelsTest = (filter) => {
    test('single item with filter: ' + filter, () => {
      const priority = Utility.getRandomNumber(100, 199);
      const wheel = createWheel(priority, true);
      const byId = { [wheel.id]: wheel };

      const actual = getVisibleChoreWheels({ byId }, filter);

      expect(actual).toEqual([wheel]);
    });

    test('two items with filter: ' + filter, () => {
      const priorityA = Utility.getRandomNumber(100, 199);
      const priorityB = Utility.getRandomNumber(200, 299);
      const wheelA = createWheel(priorityA, true);
      const wheelB = createWheel(priorityB, true);
      const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

      const actual = getVisibleChoreWheels({ byId }, filter);

      expect(actual).toEqual([wheelA, wheelB]);
    });

    test('reverse priority for two items with filter: ' + filter, () => {
      const priorityA = Utility.getRandomNumber(100, 199);
      const priorityB = Utility.getRandomNumber(200, 299);
      const wheelA = createWheel(priorityB, true);
      const wheelB = createWheel(priorityA, true);
      const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

      const actual = getVisibleChoreWheels({ byId }, filter);

      expect(actual).toEqual([wheelB, wheelA]);
    });
  };
  allWheelsTest('SHOW_ALL');
  allWheelsTest(Utility.getRandomString());

  test('single item with filter: SHOW_VISIBLE', () => {
    const priority = Utility.getRandomNumber(100, 199);
    const wheel = createWheel(priority, true);
    const byId = { [wheel.id]: wheel };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_VISIBLE');

    expect(actual).toEqual([wheel]);
  });

  test('two items with filter: SHOW_VISIBLE', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const wheelA = createWheel(priorityA, true);
    const wheelB = createWheel(priorityB, true);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_VISIBLE');

    expect(actual).toEqual([wheelA, wheelB]);
  });

  test('reverse priority for two items with filter: SHOW_VISIBLE', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const wheelA = createWheel(priorityB, true);
    const wheelB = createWheel(priorityA, true);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_VISIBLE');

    expect(actual).toEqual([wheelB, wheelA]);
  });

  test('single hidden item with filter: SHOW_VISIBLE', () => {
    const priority = Utility.getRandomNumber(100, 199);
    const wheel = createWheel(priority, false);
    const byId = { [wheel.id]: wheel };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_VISIBLE');

    expect(actual).toEqual([]);
  });

  test('partial hidden two items with filter: SHOW_VISIBLE', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const wheelA = createWheel(priorityA, true);
    const wheelB = createWheel(priorityB, false);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_VISIBLE');

    expect(actual).toEqual([wheelA]);
  });

  test('reverse priority partial hidden with filter: SHOW_VISIBLE', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const priorityC = Utility.getRandomNumber(300, 399);
    const wheelA = createWheel(priorityB, true);
    const wheelB = createWheel(priorityA, true);
    const wheelC = createWheel(priorityC, false);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB, [wheelC.id]: wheelC };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_VISIBLE');

    expect(actual).toEqual([wheelB, wheelA]);
  });

  test('single item with filter: SHOW_HIDDEN', () => {
    const priority = Utility.getRandomNumber(100, 199);
    const wheel = createWheel(priority, false);
    const byId = { [wheel.id]: wheel };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_HIDDEN');

    expect(actual).toEqual([wheel]);
  });

  test('two items with filter: SHOW_HIDDEN', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const wheelA = createWheel(priorityA, false);
    const wheelB = createWheel(priorityB, false);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_HIDDEN');

    expect(actual).toEqual([wheelA, wheelB]);
  });

  test('reverse priority for two items with filter: SHOW_HIDDEN', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const wheelA = createWheel(priorityB, false);
    const wheelB = createWheel(priorityA, false);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_HIDDEN');

    expect(actual).toEqual([wheelB, wheelA]);
  });

  test('single visible item with filter: SHOW_HIDDEN', () => {
    const priority = Utility.getRandomNumber(100, 199);
    const wheel = createWheel(priority, true);
    const byId = { [wheel.id]: wheel };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_HIDDEN');

    expect(actual).toEqual([]);
  });

  test('partial visible two items with filter: SHOW_HIDDEN', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const wheelA = createWheel(priorityA, false);
    const wheelB = createWheel(priorityB, true);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_HIDDEN');

    expect(actual).toEqual([wheelA]);
  });

  test('reverse priority partial visible with filter: SHOW_HIDDEN', () => {
    const priorityA = Utility.getRandomNumber(100, 199);
    const priorityB = Utility.getRandomNumber(200, 299);
    const priorityC = Utility.getRandomNumber(300, 399);
    const wheelA = createWheel(priorityB, false);
    const wheelB = createWheel(priorityA, false);
    const wheelC = createWheel(priorityC, true);
    const byId = { [wheelA.id]: wheelA, [wheelB.id]: wheelB, [wheelC.id]: wheelC };

    const actual = getVisibleChoreWheels({ byId }, 'SHOW_HIDDEN');

    expect(actual).toEqual([wheelB, wheelA]);
  });
});

/**
 * Gets a basic wheel object with the defined priority
 *
 * @param {Number} priority The position in the returned list.
 * @param {Boolean} isVisible An option deciding when a wheel is filtered out.
 *
 * @return {Object}
 */
const createWheel = (priority, isVisible) => {
  return {
    id: Utility.getRandomNumber(),
    priority,
    isVisible,
  };
};
