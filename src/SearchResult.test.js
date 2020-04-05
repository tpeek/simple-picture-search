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

  it('shows "Saved" text when saved = true', () => {
    const wrapper = setup({ saved: true });

    expect(wrapper.find('p').text()).toBe('Saved');
  });

  it('sets proper class when saved = true', () => {
    const wrapper = setup({ saved: true });

    expect(wrapper.find('p').props().className).toBe('makeStyles-savedMessage-4');
  });

  it('shows "Save" text when saved = false', () => {
    const wrapper = setup({ saved: false });

    expect(wrapper.find('p').text()).toBe('Save');
  });

  it('sets proper class when saved = false', () => {
    const wrapper = setup({ saved: false });

    expect(wrapper.find('p').props().className).toBe('makeStyles-saveMessage-3');
  });
});
