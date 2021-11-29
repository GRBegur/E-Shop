import React from 'react'
import '../styles/App.css';
import { Provider } from 'react-redux';
import NavBar from './NavBar'
import store from '../storeF/store'
import Filters from './Filters';
import Content from './Content';

function App(){
  return (
    <div id="main">
      <Provider store={store}>
        <NavBar />
        <div id="container">
          <Filters />
          <Content />
        </div>
      </Provider>
    </div>
  )
}


export default App;
