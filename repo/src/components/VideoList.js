<<<<<<< HEAD
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
=======
import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = ({
  videos,
  handleVideoListEntryTitleClick,
  user = { name: "Guest" },
  darkMode
}) => (
  <div className={darkMode ? "video-list dark" : "video-list"}>
    <h5>{user ? user.name : ""}님이 검색하신 동영상입니다.</h5>
    <div className="media">
      {videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))}
    </div>
>>>>>>> project/master
  </div>
); */

export default VideoList;

/* const Fake = fakeData.map((id) => {
  <li key={id.videoId}>
    {id}
  </li>}
  ); */