import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 1W0u_D9tcQ0my3BZWgjeCuBL26aTWK73E2BoqKFh8iI',
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

// 1W0u_D9tcQ0my3BZWgjeCuBL26aTWK73E2BoqKFh8iI
