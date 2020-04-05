import React from 'react';
import SearchResults from './SearchResults';

const result = {
  id: 1,
  previewURL: 'https://www.example.com',
  tags: 'animals, tigers, circus',
  likes: 9001,
  favorites: 42,
};

const defaultProps = {
  results: [result],
  savedResults: [result],
};

const setup = (props) => shallow(<SearchResults {...defaultProps} {...props} />);

describe('<SearchResults />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
