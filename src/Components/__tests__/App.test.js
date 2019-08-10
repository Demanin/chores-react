import App from 'src/Components/App';
import React from 'react';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('App', () => {
  test('snapshot', () => {
    const fixture = shallow(<App />);

    expect(fixture).toMatchSnapshot();
  });
});
