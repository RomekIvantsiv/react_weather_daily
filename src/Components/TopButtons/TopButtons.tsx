import React from 'react';

interface Props {
  onChangeQuery: (newQuery: { q: string }) => void
}

export const TopButtons:React.FC<Props> = ({ onChangeQuery }) => {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Sydney',
    },
    {
      id: 3,
      title: 'Warsaw',
    },
    {
      id: 4,
      title: 'Tokyo',
    },
    {
      id: 5,
      title: 'Toronto',
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          type="button"
          className="text-white text-lg font-medium"
          onClick={() => {
            onChangeQuery({ q: city.title });
          }}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};
