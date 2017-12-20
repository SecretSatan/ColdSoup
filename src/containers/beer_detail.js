import React, { Component } from 'react';
import { connect } from 'react-redux';

class BeerDetail extends Component {
  render() {
    if (!this.props.beer) {
      return <div className="">Select a beer to get started</div>
    }

    return (
      <div className="soup-detail-container">
        <h3>Details for: </h3>
        <div> Name: { this.props.beer.name } </div>
        <div> Description: { this.props.beer.description } </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    beer: state.activeBeer
  };
}

export default connect(mapStateToProps)(BeerDetail);
