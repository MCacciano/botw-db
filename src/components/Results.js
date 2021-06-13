import React from 'react';
import PropTypes from 'prop-types';

import ResultItem from './ResultItem';

const Results = ({ results }) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4'>
      {results.map((result) => (
        <ResultItem key={result.id} {...result} />
      ))}
    </div>
  );
};

Results.defaultProps = {
  results: [],
};

Results.propTypes = {
  results: PropTypes.array,
};

export default Results;
