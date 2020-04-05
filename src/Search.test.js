import React from 'react';
import Search from './Search';
import TextField from '@material-ui/core/TextField';

const defaultProps = {
  onSearch: jest.fn(),
};

const setup = (props) => shallow(<Search {...defaultProps} {...props} />);

describe('<Search />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('calls onSearch prop and e.preventDefault when form is submitted', () => {
    const wrapper = setup();
    const mockfn = jest.fn();
    wrapper.find('form').simulate('submit', { preventDefault: mockfn });

    expect(mockfn).toHaveBeenCalledTimes(1);
    expect(defaultProps.onSearch).toHaveBeenCalledWith('', '');
  });

  it('calls onSearch with proper arguments when form is submitted', () => {
    const wrapper = setup();
    const mockEvent = { preventDefault: jest.fn() };
    wrapper
      .find(TextField)
      .first()
      .simulate('change', { target: { value: 'test search term' } });
    wrapper
      .find(TextField)
      .at(1)
      .simulate('change', { target: { value: 'test category' } });
    wrapper.find('form').simulate('submit', mockEvent);

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(defaultProps.onSearch).toHaveBeenCalledWith('test search term', 'test category');
  });
});
