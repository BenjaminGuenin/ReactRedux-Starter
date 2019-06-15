import React, {Component} from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = () => {
  const movies = ['Film1', 'Film2', 'Film3', 'Film4', 'Film5'];

  return (
    <div>
      <ul>
        <VideoListItem movie={movies[0]} />
        <VideoListItem movie={movies[1]} />
        <VideoListItem movie={movies[2]} />
        <VideoListItem movie={movies[3]} />
        <VideoListItem movie={movies[4]} />
      </ul>
    </div>
  );
};

export default VideoList;
