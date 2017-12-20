import { combineReducers } from 'redux';

import BeersReducer from './reducer_beers';
import BeerDetailsReducer from './reducer_beer_details';

const rootReducer = combineReducers({
  beers: BeersReducer,
  beerDetails: BeerDetailsReducer
});

export default rootReducer;
