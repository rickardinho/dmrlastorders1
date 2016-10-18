import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {

  render() {
    console.log(this.props);
    const { titleStyle } = styles;
    const { name } = this.props.name;

    return (
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = ({ pubs }) => {
  const { pubslist } = pubs;
  console.log(pubslist);
  return { pubslist };
};

export default connect(mapStateToProps, actions)(ListItem);
