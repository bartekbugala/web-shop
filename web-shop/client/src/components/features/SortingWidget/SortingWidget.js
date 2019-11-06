import React from 'react';
import { connect } from 'react-redux';

const SortingWidget = () => (
  <div>
    <h2>Sortuj:</h2>
    <p onClick={() => console.log('az')}>Nazwa A-Z</p>
    <p onClick={() => console.log('za')}>Nazwa Z-A</p>
    <p onClick={() => console.log('12')}>Cena rosnąco</p>
    <p onClick={() => console.log('21')}>Cena malejąco</p>
  </div>
);

export default SortingWidget;
