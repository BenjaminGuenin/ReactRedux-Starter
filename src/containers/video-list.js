import React, { Component } from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList = props => {
  const { movieList } = props;
  return (
    <div>
      <ul>
        {movieList.map(movie => {
          return (
            <VideoListItem
              key={movie.id}
              movie={movie}
              callbackVideoListItem={receiveCallbackVideoListItem}
            />
          );
        })}
      </ul>
    </div>
  );

  function receiveCallbackVideoListItem(movie) {
    props.callback(movie);
  }
};

export default VideoList;
