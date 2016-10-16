import { View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import LibraryList from './components/LibraryList';
import SearchBar from './containers/search_bar';
import { Header } from './components/common';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Last Orders" />
          <SearchBar />
          <LibraryList />
        </View>
      </Provider>
    );
  };

export default App;
