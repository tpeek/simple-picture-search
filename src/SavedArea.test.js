import React from 'react';
import SavedArea from './SavedArea';

const defaultProps = {
  savedResults: [{ id: 1, pageURL: 'https://www.example.com' }],
};

const setup = (props) => shallow(<SavedArea {...defaultProps} {...props} />);

describe('<SavedArea />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
