import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { getPubs, getPlaceDetails, coordChanged } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';

class WelcomeForm extends Component {

  onCoordChange(text) {
    this.props.coordChanged(text);
  }

  onButtonPress() {
    const { coord } = this.props;
    this.props.getPubs({ coord });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Find Pubs
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Coord"
            placeholder="51.499415,-0.052276"
            onChangeText={this.onCoordChange.bind(this)}
            value={this.props.coord}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ pubs }) => {
  const { pubslist, coord, error, loading } = pubs;
  console.log(pubslist);
  return { pubslist, coord, error, loading };
};

export default connect(mapStateToProps, {
  getPubs, coordChanged
})(WelcomeForm);
