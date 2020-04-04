import React from 'react';
import App from './App';

const setup = () => shallow(<App />);

describe('<App />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });
});
