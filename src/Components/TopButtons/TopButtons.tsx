import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHeaderCities } from '../../store/selectors';
import { setQuery } from '../../store/store';

export const TopButtons:React.FC = () => {
  const dispatch = useDispatch();
  const cities = useSelector(getHeaderCities);

  return (
    <div className="flex items-center justify-around my-6 mt-0">
      {cities.map((city) => (
        <button
          key={city.id}
          type="button"
          className="text-white text-lg font-medium"
          onClick={() => {
            dispatch(setQuery({ q: city.title }));
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};
