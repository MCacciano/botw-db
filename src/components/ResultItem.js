import React from 'react';
import PropTypes from 'prop-types';

const ResultItem = ({ id, category, name, image, description }) => {
  return (
    <div
      key={id}
      className='flex flex-col border border-green-600 rounded shadow'
    >
      <div className='relative'>
        <div className='bg-gray-400 h-64'>
          <img
            src={image}
            alt={`BotW ${category} ${name}`}
            className='w-full h-full rounded rounded-b-none object-cover'
          />
        </div>
        <h3 className='absolute bottom-2 left-2 capitalize font-medium border border-yellow-400 rounded p-1 bg-black bg-opacity-50 text-white tracking-wide'>
          {name}
        </h3>
      </div>
      <div className='p-3'>
        <p className='text-sm my-2'>{description}</p>
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default ResultItem;
