import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDLJk6pikTi22q8GEr99UjsSZ_p06ZMMMo';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {videos: [] };

    YTSearch({key:API_KEY, term: 'food'}, (videos) => {
      this.setState({videos});
    });

  }

  render() {
    return (
      <div className="App">
        <SearchBox />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
