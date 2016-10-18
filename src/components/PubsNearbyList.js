import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class PubsNearbyList extends Component {
    componentWillMount() {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(this.props.pubslist.data.results);
      console.log(this.dataSource);
    }

    renderRow(pub) {
      return <ListItem pub={pub} />;
    }

    render() {
      return (
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    }
}

const mapStateToProps = state => {
  return { pubslist: state.pubs.pubslist };
};

export default connect(mapStateToProps)(PubsNearbyList);
