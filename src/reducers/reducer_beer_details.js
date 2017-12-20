import {
  FETCH_BEER_DETAILS,
  FETCH_BEER_DETAILS_DONE,
  FETCH_BEER_DETAILS_FAIL
} from '../actions/index';

// State argument is not an application state, only the state
// this reducer is responsible for
export default function (
  state = {
    data    : {},
    id      : 0,
    error   : null
  }, action : action <{ data? : beer; id? : number; error? : Error }> ) {
    switch( action.type ) {
      case FETCH_BEER_DETAILS:
        return {
          data  : {},
          id    : action.id,
          error : null
        };
      case FETCH_BEER_DETAILS_DONE:
        return {
          data  : action.data,
          error : null
        };
      case FETCH_BEER_DETAILS_FAIL:
        return {
          data  : {},
          error : action.error
        };
      default:
        return state;
    }
  };
