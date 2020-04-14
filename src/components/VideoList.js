import React, { Component } from 'react';
import VideoListEntry from './VideoListEntry';

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from './__test__/fakeData';
console.log(fakeData);


class VideoList extends Component {
  render() {
    return (
      <div className="video-list media">
        {fakeData.map(data => {
          <VideoListEntry id={data.id.videoId} />
        })}
      </div>
    )
  }
}

/* const VideoList = () => (
  <div className="video-list media">
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
    <VideoListEntry />
  </div>
); */

export default VideoList;

/* const Fake = fakeData.map((id) => {
  <li key={id.videoId}>
    {id}
  </li>}
  ); */