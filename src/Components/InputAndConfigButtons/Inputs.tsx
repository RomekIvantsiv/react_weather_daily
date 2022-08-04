import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getUnitsSelector } from '../../store/selectors';
import { setQuery, setUnits } from '../../store/store';

const { UilSearch, UilLocationPoint } = require('@iconscout/react-unicons');

export const InputAndConfigButtons:React.FC = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const units = useSelector(getUnitsSelector);

  const handleSearchClick = () => {
    if (city !== '') {
      dispatch(setQuery({ q: city }));
      setCity('');
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching users location');
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success('Location fetched');
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        dispatch(setQuery({ lat, lon }));
      });
    }
  };

  const handleUnitsChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedUnit = event.currentTarget.name;

    if (units !== selectedUnit) {
      dispatch(setUnits(selectedUnit));
    }
  };

  return (
    <div className="flex flex-grow justify-center my-6">
      <form
        className="flex flex-row w-3/4 items-center justify-center space-x-4"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          className="phone:text-lg phonexs:text-sm font-light p-2 w-full phone:h-11 phonexs:h-7 shadow-xl focus:outline-none capitalize "
          placeholder="Search for city..."
          value={city}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearchClick();
            }
          }}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <button
          type="submit"
        >
          <UilSearch
            className="text-white phone:h-7 phone:w-7 phonexs:h-6 phonexs:w-6 cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
        </button>

        <button
          type="submit"
        >
          <UilLocationPoint
            className="text-white phone:h-7 phone:w-7 phonexs:h-6 phonexs:w-6 cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </button>

      </form>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          type="button"
          name="metric"
          className="phonexs:text-xl phone:text-2xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          type="button"
          name="imperial"
          className="phonexs:text-xl phone:text-2xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};
