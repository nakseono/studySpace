import React from "react";
import VideoListEntry from "./VideoListEntry";

const VideoList = ({ videos, handleVideoListEntryTitleClick }) => (
  <div className="video-list media">
    {videos.map(video => (
      <VideoListEntry
        key={video.etag}
        video={video}
        handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
      />
    ))}
  </div>
);

export default VideoList;
