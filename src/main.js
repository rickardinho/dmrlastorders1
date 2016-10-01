var ReactN = require('react-native');
var React = require('react');
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/app';
import reducers from './reducers';

var{
  View,
  Text,
  StyleSheet,
  Navigator
} = ReactN;


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


module.exports = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>

      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
