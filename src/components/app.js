import React from 'react';
import { Component } from 'react';

import BeerList from '../containers/beer_list';
import BeerDetail from '../containers/beer_detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BeerDetail />
        <BeerList />
      </div>
    );
  }
}
