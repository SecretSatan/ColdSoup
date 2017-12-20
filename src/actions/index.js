import fetch from 'cross-fetch';

// Actions' constants for the list of beers
export const FETCH_BEERS          = 'FETCH_BEERS';
export const FETCH_BEERS_DONE     = 'FETCH_BEERS_DONE';
export const FETCH_BEERS_FAIL     = 'FETCH_BEERS_FAIL';

// Actions' constants for the beer details
export const FETCH_BEER_DETAILS       = 'FETCH_BEER_DETAILS';
export const FETCH_BEER_DETAILS_DONE  = 'FETCH_BEER_DETAILS_DONE';
export const FETCH_BEER_DETAILS_FAIL  = 'FETCH_BEER_DETAILS_FAIL';

export function fetchBeers( page : number ) {
  return {
    type: FETCH_BEERS,
    page
  }
};

export function fetchBeersDone( data : beer ) {
  return {
    type: FETCH_BEERS_DONE,
    data
  }
};

export function fetchBeersFail( error : Object ) {
  return {
    type: FETCH_BEERS_FAIL,
    error
  }
};

export function fetchBeerDetails( id : number ) {
  return {
    type: FETCH_BEER_DETAILS,
    id
  }
};

export function fetchBeerDetailsDone( data : beer[] ) {
  return {
    type: FETCH_BEER_DETAILS_DONE,
    data
  }
};

export function fetchBeerDetailsFail( error : Error ) {
  return {
    type: FETCH_BEER_DETAILS_FAIL,
    error
  }
};

export const GetBeers = (
  pageFrom : number = 1,
  pageTo : number = 20
)/*:Function*/ => {
  return ( dispatch : dispatch ) : void => {
    dispatch(fetchBeers(pageFrom));

    fetch(`https://api.punkapi.com/v2/beers?page_from=${pageFrom}&page_to=${pageTo}`)
      .then( ( res : Object ) : Promise<beer[]> => {
        if ( res.status === 200 ) {
          return res.json();
        } else {
          throw new Error(res.statusText || 'BeerPage.error_api');
        }
      })
      .then( ( beers : beer[] ) : void => {
        if (Array.isArray(beers) && beers.length) {
          dispatch(fetchBeersDone(beers));
        } else {
          throw new Error('BeerPage.error_no_beers');
        }
      })
      .catch( ( err : Error ) : void => dispatch(fetchBeersFail(err)));
  }
};

export const getBeerDetails = (
  id : number,
  beers : beer[] = []
)/*:Function*/ => {
  return ( dispatch : dispatch ) : void => {
    dispatch(fetchBeerDetails(id));

    let findBeer : beer[] = beers.filter( beer => beer.id === id);

    if ( findBeer.length ) {
      dispatch(fetchBeerDetailsDone(findBeer[0]));
    }
    else {
      fetch(`https://api.punkapi.com/v2/beers/${id}`)
        .then( ( res : Object ) : Promise<beer[]> => {
          if ( res.status === 200 ) {
            return res.json();
          } else {
            throw new Error(res.statusText || 'BeerDetails.error_api');
          }
        })
        .then( ( beers : beer[] ) : void => {
          if (Array.isArray(beers) && beers.length) {
            dispatch(fetchBeerDone(beers[0]));
          } else {
            throw new Error('BeerDetails.error_no_match');
          }
        })
        .catch( ( err : Error ) : void => dispatch(fetchBeersFail(err)));
    }
  }
};

/*
export function selectSoup(soup) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property
  return {
    type: 'SOUP_SELECTED',
    payload: soup
  };
}
*/
