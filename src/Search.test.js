import React from 'react';
import Search from './Search';

const defaultProps = {
  onSearch: jest.fn(),
};

const setup = (props) => shallow(<Search {...defaultProps} {...props} />);

describe('<Search />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
