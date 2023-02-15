import React from 'react';
import ReactPlayer from 'react-player';
import '../css/custom.css';

const VideoPlayer = ({ url, width = "640", height = "390" }) => (
  <div className="embed-container">
    <ReactPlayer
      url={url}
      width={width}
      height={height}
      className="react-player"
    />
  </div>
);

export default VideoPlayer;