import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  render() {
    console.log(this.props);
    const { titleStyle, descriptionStyle } = styles;
    const { name } = this.props.pub;
    const { place_id } = this.props.pub;

    return (
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
            <Text style={descriptionStyle}>
              200m {place_id}
            </Text>
            <Text style={descriptionStyle}>
              open for: 1 hr
            </Text>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    height: 50
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = ({ pubs }) => {
  const { pubslist } = pubs;
  return { pubslist };
};

export default connect(mapStateToProps, actions)(ListItem);
