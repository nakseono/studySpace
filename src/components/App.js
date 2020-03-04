import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import Setting from "./Setting";
import { searchYouTube } from "../searchYouTube";
import { YOUTUBE_API_KEY } from "../../config/youtube";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null,
      isSettingOpen: false,
      currentUser: {
        name: "김코딩"
      }
    };
  }

  componentDidMount() {
    // this.getYouTubeVideos("코드스테이츠");
  }

  getYouTubeVideos(query) {
    var options = {
      key: YOUTUBE_API_KEY,
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

  handleSettingButtonClick() {
    this.setState(prevState => ({
      isSettingOpen: !prevState.isSettingOpen
    }));
  }

  render() {
    return (
      <div>
        <Nav
          handleSearchInputChange={this.getYouTubeVideos.bind(this)}
          handleSettingButtonClick={this.handleSettingButtonClick.bind(this)}
          user={this.state.currentUser}
        />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-7">
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(
              this
            )}
            videos={this.state.videos}
            user={this.state.currentUser}
          />
        </div>
        <Setting
          isOpen={this.state.isSettingOpen}
          handleClose={this.handleSettingButtonClick.bind(this)}
          user={this.state.currentUser}
        ></Setting>
      </div>
    );
  }
}

export default App;
