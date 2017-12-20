import {
  FETCH_BEERS,
  FETCH_BEERS_DONE,
  FETCH_BEERS_FAIL
} from '../actions/index';

export default function (
  state = {
    data         : [],
    page         : 1,
    error        : null
  }, action : action <{ data? : beer[], page? : number, error? : Error }> ) {
  switch ( action.type ) {
    case FETCH_BEERS:
      return {
        data  : [],
        page  : action.page,
        error : null
      };
    case FETCH_BEERS_DONE:
      return {
        data  : action.data,
        error : null
      };
    case FETCH_BEERS_FAIL:
      return {
        data  : [],
        error : action.error
      };
    default:
      return state;
  }
};

/*
export default function() {
  return [
    { name: 'Potato Mash', description: 'Not so much potato-ish' },
    { name: 'BeetRoot Powah', description: "I've had it worse" },
    { name: 'Not Your Fault', description: 'This is some serious shit' },
    { name: "It wasn't me", description: 'What is that smell?' },
    { name: 'Potato Mash1', description: 'Not so much potato-ish' },
    { name: 'BeetRoot Powah1', description: "I've had it worse" },
    { name: 'Not Your Fault1', description: 'This is some serious shit' },
    { name: "It wasn't me1", description: 'What is that smell?' },
    { name: 'Potato Mash2', description: 'Not so much potato-ish' },
    { name: 'BeetRoot Powah2', description: "I've had it worse" },
    { name: 'Not Your Fault2', description: 'This is some serious shit' },
    { name: "It wasn't me2", description: 'What is that smell?' },
    { name: 'Potato Mash3', description: 'Not so much potato-ish' },
    { name: 'BeetRoot Powah3', description: "I've had it worse" },
    { name: 'Not Your Fault3', description: 'This is some serious shit' },
    { name: "It wasn't me3", description: 'What is that smell?' },
    { name: 'Potato Mash4', description: 'Not so much potato-ish' },
    { name: 'BeetRoot Powah4', description: "I've had it worse" },
    { name: 'Not Your Fault4', description: 'This is some serious shit' },
    { name: "It wasn't me4", description: 'What is that smell?' }
  ]
}
*/
