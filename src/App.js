import React from 'react';
import {Provider} from 'react-redux'
import store from '../reducers'
import ListComponent from './ListComponent'

function App() {
  return (
      <Provider store ={store}>
            <ListComponent></ListComponent>
      </Provider>
    
  );
}
 
export default App;
