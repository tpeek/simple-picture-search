import React from 'react';
import SearchResults from './SearchResults';
import SearchResult from './SearchResult';

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
  saveResult: jest.fn(),
};

const setup = (props) => shallow(<SearchResults {...defaultProps} {...props} />);

describe('<SearchResults />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('renders an empty list when there are no results', () => {
    const wrapper = setup({ results: [] });

    expect(wrapper).toMatchSnapshot();
  });

  it('sets saved to true when item is in savedResults', () => {
    const wrapper = setup();

    expect(wrapper.find(SearchResult).props().saved).toBe(true);
  });

  it('sets saved to false when item is not in savedResults', () => {
    const wrapper = setup({ savedResults: [] });

    expect(wrapper.find(SearchResult).props().saved).toBe(false);
  });

  it('passes saveResult the result object when called', () => {
    const wrapper = setup();
    wrapper.find(SearchResult).props().saveResult();

    expect(defaultProps.saveResult).toHaveBeenCalledWith(result);
  });
});
