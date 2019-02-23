import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null
    };
  }

  componentDidMount() {
    // 아래는 참고용 코드이며
    // searchYouTube 내용을 추가해서 검색 결과를 넣어야 합니다.
    this.setState({
      videos: [{
        "kind": "youtube#searchResult",
        "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Pz7PuC6nj8p4rs1XTt6IVYhgqzc\"",
        "id": {
          "kind": "youtube#video",
          "videoId": "DgdMV3IczYY"
        },
        "snippet": {
          "title": "♥Happy Cats Compilation - Cutest Cat Ever 2018♥ #1",
          "description": "Happy Cats Compilation - Cutest Cat Ever 2018 Please Subscribe to watching more Cute Videos: Cute Animal, Cute Dog, Cat and Babies.",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/DgdMV3IczYY/default.jpg",
              "width": 120,
              "height": 90
            },
            "channelTitle": "Cute VN",
          }
        }
      }]
    });
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-7">
          <VideoList
            handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
            videos={this.state.videos}
          />
        </div>
      </div>
      );
  }
}

export default App;
