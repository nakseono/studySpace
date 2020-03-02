import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import { searchYouTube } from "../searchYouTube";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos("react tutorials");
  }

  getYouTubeVideos(query) {
    var options = {
      key: "YOUTUBE_API_KEY",
      query: query
    };

    searchYouTube(options, videos =>
      this.setState({
        videos: videos,
        currentVideo: videos[0]
      })
    );
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-7">
          {/*
           * It's very important to bind the context of this callback.
           * Also acceptable is to pass a anonymous functoin expression with a fat
           * arrow that inherits the surrounding lexical `this` context:
           *
           *   handleVideoListEntryTitleClick={(video) => this.onVideoListEntryClick(video)}
           *                                  - or -
           *   handleVideoListEntryTitleClick={(currentVideo) => this.setState({currentVideo})}
           *
           */}
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(
              this
            )}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
