import Footer from 'src/Components/Footer/Footer';
import React from 'react';
import Utility from 'jest/Utility';
import { shallow } from 'enzyme';

describe('Footer', () => {
  test('snapshot', () => {
    const fixture = shallow(<Footer />);

    expect(fixture).toMatchSnapshot();
  });
});
