import _ from "lodash";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./Components/search_bar";
import VideoList from "./Components/video_list";
import VideoDetail from "./Components/video_detail";

const API_KEY = "AIzaSyD05vrSVVzlt_Mtl1jHsXd5rCgX0viytAg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
     };
    this.videoSearch("pure desmond")
  }

  videoSearch(term) {
    YTSearch( {key: API_KEY, term}, (videos) => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));