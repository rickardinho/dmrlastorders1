var ReactN = require('react-native');
var{
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight
} = ReactN;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaces } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });  //need to convert term to latlng
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchPlaces(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <View>
        <TextInput
        placeholder="Get a five-day forecast in your favorite cities"
        value={this.state.term}
        onChange={this.onInputChange} />

        <TouchableHighlight onPress={this.onFormSubmit}>
          <Text>Search</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPlaces }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
