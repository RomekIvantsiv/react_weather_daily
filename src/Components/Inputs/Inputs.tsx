import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { searchParamsType } from '../../react-app-env.d';

const { UilSearch, UilLocationPoint } = require('@iconscout/react-unicons');

interface Props {
  units: string
  onChangeQuery: (newQuery: searchParamsType) => void
  onChangeUnits: (newUnits: string) => void
}

export const Inputs:React.FC<Props> = ({ units, onChangeQuery, onChangeUnits }) => {
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== '') {
      onChangeQuery({ q: city });
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
        onChangeQuery({ lat, lon });
      });
    }
  };

  const handleUnitsChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectedUnit = event.currentTarget.name;

    if (units !== selectedUnit) {
      onChangeUnits(selectedUnit);
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
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize "
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
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
        </button>

        <button
          type="submit"
        >
          <UilLocationPoint
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </button>

      </form>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          type="button"
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          type="button"
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};
