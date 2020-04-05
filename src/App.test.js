import React from 'react';
import App from './App';
import Search from './Search';
import SearchResults from './SearchResults';

const setup = () => shallow(<App />);

describe('<App />', () => {
  it('renders snapshot correctly', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  describe('saveResult function', () => {
    it('updates savedResults when the result is not already saved', () => {
      const wrapper = setup();
      let saveResult = wrapper.find(SearchResults).props().saveResult;
      saveResult({ id: 1 });
      saveResult = wrapper.find(SearchResults).props().saveResult;
      saveResult({ id: 2 });

      expect(wrapper.find(SearchResults).props().savedResults).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('does not update savedResults when the result is already saved', () => {
      const wrapper = setup();
      let saveResult = wrapper.find(SearchResults).props().saveResult;
      saveResult({ id: 1 });
      saveResult = wrapper.find(SearchResults).props().saveResult;
      saveResult({ id: 1 });

      expect(wrapper.find(SearchResults).props().savedResults).toEqual([{ id: 1 }]);
    });
  });

  describe('fetchSearchResults function', () => {
    global.fetch = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          resolve({
            ok: true,
            json: () =>
              new Promise((resolve) => {
                resolve({ hits: [{ id: 1 }, { id: 2 }] });
              }),
          });
        })
    );

    it('updates results', async () => {
      const wrapper = setup();
      const fetchSearchResults = wrapper.find(Search).props().onSearch;
      await fetchSearchResults();

      expect(wrapper.find(SearchResults).props().results).toEqual([{ id: 1 }, { id: 2 }]);
    });
  });
});
