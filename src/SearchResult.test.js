import React from 'react';
import SearchResult from './SearchResult';

const defaultProps = {
  previewURL: 'https://www.example.com',
  tags: 'animals, tigers, circus',
  likes: 9001,
  favorites: 42,
  saveResult: jest.fn(),
  saved: false,
};

const setup = (props) => shallow(<SearchResult {...defaultProps} {...props} />);

describe('<SearchResult />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
