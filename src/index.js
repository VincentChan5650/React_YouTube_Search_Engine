import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBCmCZJZWjcfKAr6x3ttSNJfRxQQ89zURw';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo:null
    };
    this.videoSearch('HISHE');

  }

  videoSearch(term){
    //get the video info from YouTube and set to state
    YTsearch({key: API_KEY, term:term}, (videos) => { //callback function, data from YTsearch
      console.log(videos);
      this.setState({
        videos:videos.items,
        selectedVideo:videos.items[0]
        });
    })
  }

  render(){
    const videoSearch = _.debounce((term) =>{this.videoSearch(term)} , 300);
    //pass the video from the state to VideoList, in VideoList class, videos will become props
    return (<div>
      <SearchBar onSearchTermChange={videoSearch}/>

      <VideoDetail video={this.state.selectedVideo} />

      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}
      />

    </div>)
  };
}


ReactDOM.render(<App />, document.querySelector('.container'));
