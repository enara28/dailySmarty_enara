import React, { Component } from 'react';

import Logo from "./logo"
import SearchBar from "./search-bar"
import Results from './results';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='main-container'>
          <Logo />
          <SearchBar />
          <Results />
        </div>
      </div>
    );
  }
}
