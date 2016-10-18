import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class PubsNearbyList extends Component {
  render() {
    console.log(this.props.pubslist.data.results);
    return null;
  }
}

const mapStateToProps = state => {
  return { pubslist: state.pubs.pubslist };
};

export default connect(mapStateToProps)(PubsNearbyList);
