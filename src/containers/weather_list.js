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
//import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(placesData) {
    const name = placesData.results.name;
    const { lat, lng } = placesData.results.geometry.location;

    return (
      <View>
        //<Text>{name}</Text>
        //<View><GoogleMap lon={lon} lat={lat} /></View>
        //<Text><Chart data={temps} color="orange" units="K" /></Text>
      </View>
    );
  }

  render() {
    return (

        <View>
          {this.props.weather.map(this.renderWeather)}
        </View>

    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
