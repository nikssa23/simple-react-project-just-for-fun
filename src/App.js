import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import VideoList from './components/VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyDLJk6pikTi22q8GEr99UjsSZ_p06ZMMMo';

class App extends Component {

  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null
    };

    YTSearch({key:API_KEY, term: 'food'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });

  }

  render() {
    return (
      <div className="App">
        <SearchBox  />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
