import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBeers } from '../actions/index';
import { bindActionCreators } from 'redux';

class BeerList extends Component {
  renderList() {
    return this.props.beers.map((beer) => {
      return (
        <div
          key={ soup.name }
          onClick={ () => this.props.selectBeer(beer) }
          className="beer-list-item"
        >
          <h4 className="item-name">{ soup.name }</h4>
          <p className="item-desc">{ soup.description }</p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="beer-list">
        { this.renderList() }
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of SoupList
  return {
    beers: state.beers
  };
}

// Anything returned from this function will end up as props
// on the SoupList containers

function mapDispatchToProps(dispatch) {
  // Whenever selectSoup is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBeer: selectBeer }, dispatch);
}

// Promote SoupList from a component to a container - it needs to know
// about this new disptach method, selectSoup. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BeerList);
