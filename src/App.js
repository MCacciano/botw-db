import { useState } from 'react';

import SearchForm from './components/SearchForm';
import Results from './components/Results';

const App = () => {
  const [results, setResults] = useState([]);

  const handleOnSubmit = async ({ category, search }) => {
    try {
      const response = await fetch(
        `https://botw-compendium.herokuapp.com/api/v2/category/${category}`
      );

      const { data } = await response.json();

      // creatures category is the only one that doesn't return an array
      let res =
        category === 'creatures' ? [...data.food, ...data.non_food] : data;

      if (search !== '') {
        res = res.filter(({ name }) => name.includes(search.toLowerCase()));
      }

      setResults(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='font-Roboto'>
      <div className='border-b border-green-600 p-4'>
        <div className='flex justify-center my-2'>
          <h1 className='p-2 text-4xl font-semibold border border-green-600 rounded shadow'>
            Breathe of the Wild DB
          </h1>
        </div>
        <SearchForm onSubmit={handleOnSubmit} />
      </div>
      <Results results={results} />
    </div>
  );
};

export default App;
