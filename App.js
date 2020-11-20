import 'react-native-gesture-handler';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './src/redux/reducers';
import AppMain from './AppMain';

const store=createStore(Reducers)

const App=()=> {
  return (
    <Provider store={store}>
      <AppMain />
    </Provider>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
