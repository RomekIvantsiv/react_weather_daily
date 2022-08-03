import React from 'react';

const { UilSpinnerAlt } = require('@iconscout/react-unicons');

export const Loader:React.FC = () => {
  return (
    <div className="animate-spin"><UilSpinnerAlt size={100} /></div>
  );
};
