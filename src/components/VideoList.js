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
  </div>
);

export default VideoList;
