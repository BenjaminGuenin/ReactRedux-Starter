import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import VideoList from '../containers/video-list';

const App = function() {
  return (
    <div>
      <SearchBar />
      <VideoList />
    </div>
  );
};

export default App;
