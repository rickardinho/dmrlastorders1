import { View, Text } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(placesData) {
    const name = placesData.results.name;
    //const { lat, lng } = placesData.results.geometry.location;
    return (
      <View>
        <Text>{name}</Text>
      </View>
    );
  }

  render() {
    return (

        <View>
          {this.props.pubs.map(this.renderWeather)}
        </View>

    );
  }
}

function mapStateToProps({ pubslist }) {
  return { pubslist };
}

export default connect(mapStateToProps)(WeatherList);
