import ChoreWheel from 'src/Reducers/ChoreWheel';
import ChoreWheelList from 'src/Reducers/ChoreWheelList';
import Utility from 'jest/Utility';

jest.mock('src/Reducers/ChoreWheel');

describe('ChoreWheelList', () => {
  beforeEach(() => {
    ChoreWheel.mockClear();
  });

  test('default state', () => {
    const actual = ChoreWheelList(undefined, {});

    expect(actual).toEqual({ refresh: false, byId: {}, allIds: [] });
  });

  test('toggle refresh from default state', () => {
    const type = 'TOGGLE_REFRESH';

    const actual = ChoreWheelList(undefined, { type });

    expect(actual).toEqual({ refresh: true, byId: {}, allIds: [] });
  });

  test('toggle refresh from existing state', () => {
    const type = 'TOGGLE_REFRESH';
    const refresh = Utility.getRandomBool();

    const actual = ChoreWheelList({ refresh, byId: {}, allIds: [] }, { type });

    expect(actual).toEqual({ refresh: !refresh, byId: {}, allIds: [] });
  });

  test('add chore wheel to default state', () => {
    const wheel = createWheel();
    const action = {
      type: 'ADD_CHORE_WHEEL',
      id: wheel.id,
      title: wheel.title.text,
      turnList: wheel.turnList,
      isVisible: wheel.isVisible,
      priority: wheel.priority,
      currentTurn: wheel.currentTurn,
    };

    const actual = ChoreWheelList(undefined, action);

    const expected = {
      refresh: false,
      byId: { [wheel.id]: wheel },
      allIds: [wheel.id],
    };
    expect(actual).toEqual(expected);
  });

  test('add chore wheel to existing state', () => {
    const wheelA = createWheel();
    const wheelB = createWheel();
    const action = {
      type: 'ADD_CHORE_WHEEL',
      id: wheelB.id,
      title: wheelB.title.text,
      turnList: wheelB.turnList,
      isVisible: wheelB.isVisible,
      priority: wheelB.priority,
      currentTurn: wheelB.currentTurn,
    };
    const state = {
      refresh: false,
      byId: { [wheelA.id]: wheelA },
      allIds: [wheelA.id],
    };

    const actual = ChoreWheelList(state, action);

    const expected = {
      refresh: false,
      byId: { [wheelA.id]: wheelA, [wheelB.id]: wheelB },
      allIds: [wheelA.id, wheelB.id],
    };
    expect(actual).toEqual(expected);
  });

  test('overwrite only chore wheel', () => {
    const wheelA = createWheel();
    const wheelB = createWheel();
    wheelB.id = wheelA.id;
    const action = {
      type: 'OVERWRITE_CHORE_WHEEL',
      id: wheelB.id,
      title: wheelB.title.text,
      isEditable: wheelB.title.isEditable,
      turnList: wheelB.turnList,
      isVisible: wheelB.isVisible,
      priority: wheelB.priority,
      currentTurn: wheelB.currentTurn,
    };
    const state = {
      refresh: false,
      byId: { [wheelA.id]: wheelA },
      allIds: [wheelA.id],
    };

    const actual = ChoreWheelList(state, action);

    const expected = {
      refresh: false,
      byId: { [wheelA.id]: wheelB },
      allIds: [wheelA.id],
    };
    expect(actual).toEqual(expected);
  });

  test('overwrite one chore wheel of two', () => {
    const wheelA = createWheel();
    const wheelB = createWheel();
    const wheelC = createWheel();
    wheelB.id = wheelA.id;
    const action = {
      type: 'OVERWRITE_CHORE_WHEEL',
      id: wheelB.id,
      title: wheelB.title.text,
      isEditable: wheelB.title.isEditable,
      turnList: wheelB.turnList,
      isVisible: wheelB.isVisible,
      priority: wheelB.priority,
      currentTurn: wheelB.currentTurn,
    };
    const state = {
      refresh: false,
      byId: { [wheelA.id]: wheelA, [wheelC.id]: wheelC },
      allIds: [wheelA.id, wheelC.id],
    };

    const actual = ChoreWheelList(state, action);

    const expected = {
      refresh: false,
      byId: { [wheelA.id]: wheelB, [wheelC.id]: wheelC },
      allIds: [wheelA.id, wheelC.id],
    };
    expect(actual).toEqual(expected);
  });

  test('remove only chore wheel', () => {
    const wheel = createWheel();
    const action = {
      type: 'REMOVE_CHORE_WHEEL',
      id: wheel.id,
    };
    const state = {
      refresh: false,
      byId: { [wheel.id]: wheel },
      allIds: [wheel.id],
    };

    const actual = ChoreWheelList(state, action);

    const expected = {
      refresh: false,
      byId: {},
      allIds: [],
    };
    expect(actual).toEqual(expected);
  });

  test('remove one chore wheel of two', () => {
    const wheelA = createWheel();
    const wheelB = createWheel();
    const action = {
      type: 'REMOVE_CHORE_WHEEL',
      id: wheelB.id,
    };
    const state = {
      refresh: false,
      byId: { [wheelA.id]: wheelA, [wheelB.id]: wheelB },
      allIds: [wheelA.id, wheelB.id],
    };

    const actual = ChoreWheelList(state, action);

    const expected = {
      refresh: false,
      byId: { [wheelA.id]: wheelA },
      allIds: [wheelA.id],
    };
    expect(actual).toEqual(expected);
  });

  test('handle load error does not modify state', () => {
    const type = 'HANDLE_LOAD_ERROR';
    const wheel = createWheel();
    const state = {
      refresh: Utility.getRandomBool(),
      byId: { [wheel.id]: wheel },
      allIds: [wheel.id],
    };

    const actual = ChoreWheelList(state, { type });

    expect(actual).toEqual(state);
  });

  test('undefined action type on existing wheel', () => {
    const type = Utility.getRandomString();
    const wheel = createWheel();
    const newWheel = createWheel();
    const id = wheel.id;
    const state = { refresh: false, byId: { [wheel.id]: wheel }, allIds: [wheel.id] };

    ChoreWheel.mockReturnValue(newWheel);

    const actual = ChoreWheelList(state, { type, id });

    const expected = { refresh: false, byId: { [wheel.id]: newWheel }, allIds: [wheel.id] };
    expect(actual).toEqual(expected);
    expect(ChoreWheel).toHaveBeenCalledWith(wheel, { type, id });
  });

  test('undefined action type on default state', () => {
    const type = Utility.getRandomString();

    const actual = ChoreWheelList(undefined, { type });

    expect(actual).toEqual({ refresh: false, byId: {}, allIds: [] });
    expect(ChoreWheel).not.toHaveBeenCalled();
  });

  test('undefined action type on missing wheel', () => {
    const type = Utility.getRandomString();
    const id = Utility.getRandomNumber(100, 199);
    const wheel = createWheel();
    wheel.id = Utility.getRandomNumber(200, 299);
    const state = { refresh: false, byId: { [wheel.id]: wheel }, allIds: [wheel.id] };

    const actual = ChoreWheelList(state, { type, id });

    expect(actual).toEqual(state);
    expect(ChoreWheel).not.toHaveBeenCalled();
  });
});

/**
 * Creates a full sample wheel as would be stored in the state.
 *
 * @return {Object}
 */
const createWheel = () => {
  return {
    id: Utility.getRandomNumber(),
    title: {
      text: Utility.getRandomString(),
      isEditable: false,
    },
    turnList: [Utility.getRandomNumber()],
    isVisible: Utility.getRandomBool(),
    priority: Utility.getRandomNumber(),
    currentTurn: Utility.getRandomNumber(),
    allowAddTurn: false,
  };
};
